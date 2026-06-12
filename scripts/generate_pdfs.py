# -*- coding: utf-8 -*-
"""5 dilde kurumsal sunum PDF üretici."""
from pathlib import Path

try:
    from fpdf import FPDF
except ImportError:
    import subprocess, sys
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'fpdf2', '-q'])
    from fpdf import FPDF

OUT = Path(__file__).resolve().parent.parent / 'assets' / 'presentations'
OUT.mkdir(parents=True, exist_ok=True)

CONTENT = {
    'tr': {
        'file': 'gor_sargsyan_sunum_tr.pdf',
        'title': 'Gor Sargsyan | Kurumsal Sunum',
        'slides': [
            ('GOR SARGSYAN', 'Yapay Zeka Enstrumanlari & Ekonomik Otomasyon Stratejisi',
             '15 Yillik Makro-Ekonomi ve Yapay Zeka Muhendisligi tecrubesiyle uctan uca otonom donusum.'),
            ('Ozgecmis', 'Ekonomist & Yapay Zeka Cozum Mimari',
             'Finansal analiz, pazar dinamikleri ve makro-ekonomik modelleme. ROI odakli otonom sistemler. Ispanya, Rusya ve Avrupa genelinde kurumsal entegrasyonlar.'),
            ('Kuresel Basari Rakamlari', '24+ Kurumsal Entegrasyon | EUR140K+ Yillik Tasarruf | %98,4 Otonom Akis | 5 Ulke',
             'AI ekosistemleri operasyonel maliyetleri %70\'e varan oranda otomatize eder.'),
            ('AI Ajanlari', 'Otonom Satis | Sektorrel Operasyon | Iki Yonlu Musteri Ajanlari',
             'Butce analizi, CRM entegrasyonu, 5 dilde destek, gece operasyonlarinda %0 kacirma.'),
            ('AI Botlari', 'WhatsApp & Telegram | Veri Toplama | Bildirim Botlari',
             'API entegrasyonlari, lead yakalama, anlik alarm sistemleri. @Gor_OffLife_kartvisit_bot'),
            ('Site Mimarileri', 'Front Office | Back Office | Admin Panel',
             'SEO uyumlu arayuzler, guvenli API katmani, AI destekli analitik paneller.'),
            ('E-Ticaret', 'Yapay Zeka Destekli Donusum | +34% Sepet Donusumu',
             'Kisisellestirilmis oneri, Stripe/PayPal entegrasyonu, 5 dilde stok yonetimi.'),
            ('Portfolyo', 'Hamov Bakery | RSW TR Invest Group',
             'hamov-bakery-connect3.lovable.app | rswtrinvestgroup-alt.github.io'),
            ('Musteri Geri Donusu', 'Dogrulanmis ROI', '"Geceden gelen taleplerin %34\'u sicak siparise donustu." — Satis Direktoru, Madrid'),
            ('Iletisim', 'Kuresel Erisim', '+34 678 27 66 26 | +7 922 091 82 18 | @SargsyanOfLife | gor077887@gmail.com — Ucretsiz 15 dakikalik proje kesif gorusmesi.'),
        ]
    },
    'en': {
        'file': 'gor_sargsyan_sunum_en.pdf',
        'title': 'Gor Sargsyan | Corporate Presentation',
        'slides': [
            ('GOR SARGSYAN', 'AI Instruments & Economic Automation Strategy',
             'End-to-end autonomous transformation with 15 years of macro-economics and AI engineering.'),
            ('Profile', 'Economist & AI Solution Architect',
             'Financial analysis, market dynamics, macro-economic modeling. ROI-focused autonomous systems across Spain, Russia and Europe.'),
            ('Global Success Metrics', '24+ Corporate Integrations | EUR140K+ Annual Savings | 98.4% Autonomous Flow | 5 Countries',
             'AI ecosystems automate up to 70% of operational costs in data entry and customer support.'),
            ('AI Agents', 'Autonomous Sales | Sector Operations | Bidirectional Customer Agents',
             'Budget analysis, CRM integration, 5-language support, zero missed overnight operations.'),
            ('AI Bots', 'WhatsApp & Telegram | Data Scraping | Notification Bots',
             'API integrations, lead capture, instant alerts. @Gor_OffLife_kartvisit_bot'),
            ('Site Architecture', 'Front Office | Back Office | Admin Panel',
             'SEO-friendly interfaces, secure API layer, AI-powered analytics dashboards.'),
            ('E-Commerce', 'AI-Powered Conversion | +34% Cart Recovery',
             'Personalized recommendations, Stripe/PayPal integration, 5-language inventory.'),
            ('Portfolio', 'Hamov Bakery | RSW TR Invest Group',
             'hamov-bakery-connect3.lovable.app | rswtrinvestgroup-alt.github.io'),
            ('Client Testimonial', 'Verified ROI', '"34% of overnight inquiries converted to warm orders." — Sales Director, Madrid'),
            ('Contact', 'Global Reach', '+34 678 27 66 26 | +7 922 091 82 18 | @SargsyanOfLife | gor077887@gmail.com — Free 15-minute discovery call.'),
        ]
    },
    'es': {
        'file': 'gor_sargsyan_sunum_es.pdf',
        'title': 'Gor Sargsyan | Presentacion Corporativa',
        'slides': [
            ('GOR SARGSYAN', 'Instrumentos IA y Estrategia de Automatizacion Economica',
             'Transformacion autonoma integral con 15 anos de macroeconomia e ingenieria IA.'),
            ('Perfil', 'Economista y Arquitecto de Soluciones IA',
             'Analisis financiero, dinamicas de mercado, modelado macroeconomico. Sistemas autonomos orientados al ROI en Espana, Rusia y Europa.'),
            ('Metricas Globales', '24+ Integraciones | EUR140K+ Ahorro Anual | 98.4% Flujo Autonomo | 5 Paises',
             'Los ecosistemas IA automatizan hasta el 70% de costos operativos.'),
            ('Agentes IA', 'Ventas Autonomas | Operaciones Sectoriales | Agentes Bidireccionales',
             'Analisis de presupuesto, integracion CRM, soporte en 5 idiomas.'),
            ('Bots IA', 'WhatsApp y Telegram | Recoleccion de Datos | Bots de Notificacion',
             'Integraciones API, captura de leads. @Gor_OffLife_kartvisit_bot'),
            ('Arquitectura Web', 'Front Office | Back Office | Panel Admin',
             'Interfaces SEO, capa API segura, paneles analiticos con IA.'),
            ('E-Commerce', 'Conversion con IA | +34% Recuperacion de Carrito',
             'Recomendaciones personalizadas, integracion Stripe/PayPal.'),
            ('Portafolio', 'Hamov Bakery | RSW TR Invest Group',
             'hamov-bakery-connect3.lovable.app | rswtrinvestgroup-alt.github.io'),
            ('Testimonio', 'ROI Verificado', '"El 34% de consultas nocturnas se convirtieron en pedidos." — Director de Ventas, Madrid'),
            ('Contacto', 'Alcance Global', '+34 678 27 66 26 | +7 922 091 82 18 | @SargsyanOfLife | gor077887@gmail.com — Consulta gratuita de 15 minutos.'),
        ]
    },
    'ru': {
        'file': 'gor_sargsyan_sunum_ru.pdf',
        'title': 'Gor Sargsyan | Корпоративная Презентация',
        'slides': [
            ('GOR SARGSYAN', 'ИИ Инструменты и Стратегия Экономической Автоматизации',
             'Сквозная автономная трансформация с 15-летним опытом в макроэкономике и ИИ.'),
            ('Профиль', 'Экономист и Архитектор ИИ Решений',
             'Финансовый анализ, рыночная динамика, макроэкономическое моделирование. ROI-ориентированные системы в Испании, России и Европе.'),
            ('Глобальные Показатели', '24+ Интеграций | EUR140K+ Годовая Экономия | 98.4% Автономный Поток | 5 Стран',
             'ИИ-экосистемы автоматизируют до 70% операционных затрат.'),
            ('ИИ Агенты', 'Автономные Продажи | Отраслевые Операции | Двунаправленные Агенты',
             'Анализ бюджета, интеграция CRM, поддержка на 5 языках.'),
            ('ИИ Боты', 'WhatsApp и Telegram | Сбор Данных | Боты Уведомлений',
             'API интеграции, захват лидов. @Gor_OffLife_kartvisit_bot'),
            ('Архитектура Сайтов', 'Front Office | Back Office | Админ Панель',
             'SEO-интерфейсы, безопасный API, аналитические панели с ИИ.'),
            ('E-Commerce', 'Конверсия с ИИ | +34% Возврат Корзины',
             'Персонализированные рекомендации, интеграция Stripe/PayPal.'),
            ('Портфолио', 'Hamov Bakery | RSW TR Invest Group',
             'hamov-bakery-connect3.lovable.app | rswtrinvestgroup-alt.github.io'),
            ('Отзыв', 'Подтверждённый ROI', '"34% ночных запросов конвертированы в заказы." — Директор по Продажам, Мадрид'),
            ('Контакты', 'Глобальный Охват', '+34 678 27 66 26 | +7 922 091 82 18 | @SargsyanOfLife | gor077887@gmail.com — Бесплатная 15-минутная консультация.'),
        ]
    },
    'hy': {
        'file': 'gor_sargsyan_sunum_hy.pdf',
        'title': 'Gor Sargsyan | Կորպորատիվ Ներկայացում',
        'slides': [
            ('GOR SARGSYAN', 'AI Գործիքներ և Տնտեսական Ավտոմատացման Ռազմավարություն',
             '15 տարվա մակրո-տնտեսություն և AI ճարտարագիտության փորձով լիարժեք ինքնավար փոխակերպում։'),
            ('Կենսագրություն', 'Տնտեսագետ և AI Լուծումների Ճարտարապետ',
             'Ֆինանսական վերլուծություն, շուկայի դինամիկա, մակրո-տնտեսական մոդելավորում։ ROI կենտրոնացված ինքնավար համակարգեր։'),
            ('Գլոբալ Ցուցանիշներ', '24+ Ինտեգրացիա | EUR140K+ Տարեկան Խնայողություն | 98.4% Ինքնավար Հոսք | 5 Երկիր',
             'AI էկոհամակարգերը մինչև 70% գործառնական ծախսեր ավտոմատացնում են։'),
            ('AI Գործակալներ', 'Ինքնավար Վաճառք | Ոլորտային Գործառույթներ | Երկկողմանի Գործակալներ',
             'Բյուջեի վերլուծություն, CRM ինտեգրացիա, 5 լեզվով աջակցություն։'),
            ('AI Բոտեր', 'WhatsApp և Telegram | Տվյալների Հավաքում | Ծանուցման Բոտեր',
             'API ինտեգրացիաներ, լիդերի գրավում։ @Gor_OffLife_kartvisit_bot'),
            ('Կայքի Ճարտարապետություն', 'Front Office | Back Office | Admin Panel',
             'SEO ինտերֆեյսներ, անվտանգ API, AI վերլուծական վահանակներ։'),
            ('E-Commerce', 'AI Փոխակերպում | +34% Զամբյուղի Վերադարձ',
             'Անհատականացված առաջարկներ, Stripe/PayPal ինտեգրացիա։'),
            ('Պորտֆոլիո', 'Hamov Bakery | RSW TR Invest Group',
             'hamov-bakery-connect3.lovable.app | rswtrinvestgroup-alt.github.io'),
            ('Կարծիք', 'Հաստատված ROI', '"Գիշերային հարցումների 34%-ը վերածվեց պատվերների։" — Վաճառքի Տնօրեն, Մադրիդ'),
            ('Կապ', 'Գլոբալ Հասանելիություն', '+34 678 27 66 26 | +7 922 091 82 18 | @SargsyanOfLife | gor077887@gmail.com — 15 րոպե անվճար խորհրդատվություն։'),
        ]
    },
}


class PDF(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(16, 185, 129)
        self.cell(0, 8, 'GOR SARGSYAN | AI & Economics Engineering', align='R', new_x='LMARGIN', new_y='NEXT')
        self.ln(2)

    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(100, 116, 139)
        self.cell(0, 10, f'Page {self.page_no()}/{{nb}} | gor077887@gmail.com', align='C')


def ensure_unicode_font(pdf):
    candidates = [
        Path(__file__).parent / 'DejaVuSans.ttf',
        Path('C:/Windows/Fonts/arial.ttf'),
        Path('C:/Windows/Fonts/segoeui.ttf'),
    ]
    font_path = next((p for p in candidates if p.exists()), None)
    if font_path is None:
        import urllib.request
        font_path = candidates[0]
        for url in (
            'https://raw.githubusercontent.com/dejavu-fonts/dejavu-fonts/master/ttf/DejaVuSans.ttf',
            'https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf',
        ):
            try:
                urllib.request.urlretrieve(url, font_path)
                break
            except Exception:
                continue
    pdf.add_font('GorFont', '', str(font_path))
    pdf.add_font('GorFont', 'B', str(font_path))
    return 'GorFont'


def build_pdf(lang, data):
    pdf = PDF()
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=20)
    uni_font = ensure_unicode_font(pdf)

    def set_f(style='', size=11):
        pdf.set_font(uni_font, style, size)

    # Cover
    pdf.add_page()
    set_f('B', 28)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 20, 'GOR SARGSYAN', new_x='LMARGIN', new_y='NEXT', align='C')
    set_f('', 14)
    pdf.set_text_color(16, 185, 129)
    pdf.multi_cell(0, 10, data['slides'][0][1], align='C')
    pdf.ln(8)
    set_f('', 11)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 7, data['slides'][0][2], align='C')
    pdf.ln(20)
    set_f('B', 12)
    pdf.set_text_color(14, 165, 233)
    pdf.cell(0, 10, lang.upper(), align='C')

    for i, (heading, sub, body) in enumerate(data['slides'][1:], 2):
        pdf.add_page()
        set_f('B', 18)
        pdf.set_text_color(16, 185, 129)
        pdf.cell(0, 12, f'{i:02d}. {heading}', new_x='LMARGIN', new_y='NEXT')
        pdf.ln(4)
        set_f('B', 13)
        pdf.set_text_color(15, 23, 42)
        pdf.multi_cell(0, 8, sub)
        pdf.ln(6)
        set_f('', 11)
        pdf.set_text_color(51, 65, 85)
        pdf.multi_cell(0, 7, body)

    out_path = OUT / data['file']
    pdf.output(str(out_path))
    return out_path


def main():
    root = Path(__file__).resolve().parent.parent
    tr_src = root / 'gor_sargsyan_kurumsal_sunum.pdf'
    tr_dst = OUT / 'gor_sargsyan_sunum_tr.pdf'
    if tr_src.exists() and tr_src.stat().st_size > 5000:
        import shutil
        shutil.copy2(tr_src, tr_dst)
        print(f'Copied TR: {tr_dst}')
    else:
        build_pdf('tr', CONTENT['tr'])
        print(f'Generated TR: {tr_dst}')

    for lang in ('en', 'es', 'ru', 'hy'):
        path = build_pdf(lang, CONTENT[lang])
        print(f'Generated {lang.upper()}: {path}')


if __name__ == '__main__':
    main()
