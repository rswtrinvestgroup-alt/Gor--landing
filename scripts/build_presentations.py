# -*- coding: utf-8 -*-
"""Hizli yuklenen sunumlar: optimize HTML + sikistirilmis PDF."""
from pathlib import Path
import re
import shutil
from presentation_translations import get_replacements, LANG_META

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'sunum.html'
OUT = ROOT / 'assets' / 'presentations'
ASSETS = ROOT / 'assets'
OUT.mkdir(parents=True, exist_ok=True)

FAST_BAR_CSS = """
.viewer-bar{position:fixed;top:0;left:0;right:0;z-index:9999;background:linear-gradient(90deg,#10b981,#0ea5e9);
  color:#fff;padding:10px 24px;display:flex;justify-content:space-between;align-items:center;
  font-family:system-ui,sans-serif;font-size:13px;font-weight:600;box-shadow:0 2px 12px rgba(0,0,0,.12)}
.viewer-bar a{color:#fff;text-decoration:none;background:rgba(255,255,255,.2);padding:6px 14px;border-radius:8px}
.viewer-bar a:hover{background:rgba(255,255,255,.35)}
body{padding-top:48px}
@media print{.viewer-bar{display:none}body{padding-top:0}}
"""

PDF_BAR_LABELS = {
    'tr': ('Kurumsal Sunum', 'PDF İndir'),
    'en': ('Corporate Presentation', 'Download PDF'),
    'es': ('Presentación Corporativa', 'Descargar PDF'),
    'ru': ('Корпоративная Презентация', 'Скачать PDF'),
    'hy': ('Կորպորատիվ Ներկայացում', 'Ներբեռնել PDF'),
}


def optimize_profile_image():
    """Portre kırpma: konu ortada, 3:4 oran."""
    src = ASSETS / 'gor_main.jpg'
    dst = ASSETS / 'gor_main_pres.jpg'
    if not src.exists():
        return
    try:
        from PIL import Image
        img = Image.open(src).convert('RGB')
        iw, ih = img.size
        target_ratio = 3 / 4
        crop_h = ih
        crop_w = int(crop_h * target_ratio)
        if crop_w > iw:
            crop_w = iw
            crop_h = int(crop_w / target_ratio)
        # Konu fotografta hafif saga kayik — odak noktasi ~%58
        cx = int(iw * 0.58)
        left = max(0, min(cx - crop_w // 2, iw - crop_w))
        top = max(0, (ih - crop_h) // 2)
        img = img.crop((left, top, left + crop_w, top + crop_h))
        img = img.resize((560, 747), Image.Resampling.LANCZOS)
        img.save(dst, 'JPEG', quality=80, optimize=True, progressive=True)
        print(f'Image: gor_main_pres.jpg ({dst.stat().st_size // 1024} KB, centered crop)')
    except ImportError:
        if not dst.exists():
            shutil.copy2(src, dst)
        print('Image: Pillow yok, orijinal kopyalandi')


def apply_translations(html: str, lang: str) -> str:
    reps = get_replacements(lang)
    for old, new in sorted(reps.items(), key=lambda x: len(x[0]), reverse=True):
        html = html.replace(old, new)
    meta = LANG_META[lang]
    html = html.replace(
        '<title>Gor Sargsyan | Global AI & Ekonomi Strateji Sunumu</title>',
        f'<title>{meta["title"]}</title>'
    )
    return html


def optimize_for_speed(html: str, lang: str) -> str:
    """Harici CDN kaldir, sistem fontlari, hafif gorsel."""
    html = re.sub(r'\s*<link rel="preconnect"[^>]*>\s*', '\n', html)
    html = re.sub(r'\s*<link href="https://fonts\.googleapis\.com[^>]*>\s*', '\n', html)
    html = re.sub(r'\s*<link rel="stylesheet" href="https://cdnjs\.cloudflare\.com[^>]*>\s*', '\n', html)

    html = html.replace("'Outfit', sans-serif", "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif")
    html = html.replace("'Montserrat', sans-serif", "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif")
    html = re.sub(
        r'src="(?:\.\./)?(?:assets/)?gor_main(?:_pres)?\.jpg"',
        'src="gor_main_pres.jpg"',
        html,
    )

    fast_css = FAST_BAR_CSS + """
        .slide-title i.fa-solid, .slide-title i.fa-brands,
        .card h3 > i.fa-solid, .card h3 > i.fa-brands { display: none; }
        .title-icon, .v-icon, .v-icon-wrap, .slide-deco, .stat-icon { display: flex !important; }
        .slide { box-shadow: none; }
    """
    html = html.replace('</style>', fast_css + '\n    </style>')

    label, pdf_label = PDF_BAR_LABELS[lang]
    bar = f'''<div class="viewer-bar"><span>{label}</span><a href="gor_sargsyan_sunum_{lang}.pdf" target="_blank">{pdf_label}</a></div>\n'''
    html = html.replace('<body>', f'<body>\n{bar}')

    return html


def sync_presentation_image():
    """Gorseli sunum klasorune kopyala — goreli yol sorunlarini onler."""
    src = ASSETS / 'gor_main_pres.jpg'
    if not src.exists():
        src = ASSETS / 'gor_main.jpg'
    if src.exists():
        shutil.copy2(src, OUT / 'gor_main_pres.jpg')


def build_html(lang: str) -> Path:
    html = SRC.read_text(encoding='utf-8')
    html = apply_translations(html, lang)
    html = optimize_for_speed(html, lang)
    out = OUT / f'sunum_{lang}.html'
    out.write_text(html, encoding='utf-8')
    return out


def html_to_pdf(html_path: Path, pdf_path: Path):
    from playwright.sync_api import sync_playwright
    uri = html_path.resolve().as_uri()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(uri, wait_until='domcontentloaded', timeout=60000)
        page.wait_for_timeout(400)
        page.pdf(
            path=str(pdf_path),
            format='A4',
            landscape=True,
            print_background=True,
            margin={'top': '0', 'right': '0', 'bottom': '0', 'left': '0'},
            scale=0.92,
        )
        browser.close()


def compress_pdf(pdf_path: Path):
    try:
        import fitz
        tmp = pdf_path.with_suffix('.tmp.pdf')
        doc = fitz.open(str(pdf_path))
        doc.save(str(tmp), garbage=4, deflate=True, clean=True)
        doc.close()
        tmp.replace(pdf_path)
    except Exception:
        tmp = pdf_path.with_suffix('.tmp.pdf')
        if tmp.exists():
            tmp.unlink()


def main():
    optimize_profile_image()
    sync_presentation_image()
    for lang in ('tr', 'en', 'es', 'ru', 'hy'):
        html_path = build_html(lang)
        pdf_path = OUT / f'gor_sargsyan_sunum_{lang}.pdf'
        print(f'HTML: {html_path.name} ({html_path.stat().st_size // 1024} KB)')
        try:
            html_to_pdf(html_path, pdf_path)
            compress_pdf(pdf_path)
            print(f'PDF:  {pdf_path.name} ({pdf_path.stat().st_size // 1024} KB)')
        except Exception as e:
            print(f'PDF error {lang}: {e}')


if __name__ == '__main__':
    main()
