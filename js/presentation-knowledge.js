/**
 * Gor Sargsyan sunum içeriği — agent bilgi tabanı
 * Kaynak: sunum.html, presentation_translations.py, gor_sargsyan_kurumsal_sunum.html
 */
const PRESENTATION_KB = {
  about: {
    tr: 'Gor Sargsyan, finansal analiz, pazar dinamikleri ve makro-ekonomik modelleme alanında uzmanlaşmış ekonomist ve AI çözüm mimarıdır. Ermenistan Devlet Politeknik Üniversitesi Ekonomi mezunu; Yapay Zeka Mühendisliği eğitimiyle iki disiplini birleştirir. İspanya, Rusya ve Avrupa genelinde kurumsal finans otomasyonları ve ölçeklenebilir AI ajanları kurgulamıştır.',
    en: 'Gor Sargsyan is an economist and AI solution architect specializing in financial analysis, market dynamics and macro-economic modeling. NPUA Economics graduate with AI Engineering training. He designs corporate automations and scalable AI agents across Spain, Russia and Europe.',
    es: 'Gor Sargsyan es economista y arquitecto de soluciones IA especializado en análisis financiero y modelado macroeconómico. Graduado en Economía (NPUA) con formación en Ingeniería de IA. Opera en España, Rusia y Europa.',
    ru: 'Gor Sargsyan — экономист и архитектор ИИ-решений, специализирующийся на финансовом анализе и макроэкономическом моделировании. Выпускник экономфака НПУА, инженер ИИ. Работает в Испании, России и Европе.',
    hy: 'Gor Sargsyan-ը մասնագիտացել է ֆինանսական վերլուծության, շուկայի դինամիկայի և մակրո-տնտեսական մոդելավորման մեջ։ ՀՊՀ տնտեսաբանության և AI ճարտարագիտության կրթություն։ Գործում է Իսպանիայում, Ռուսաստանում և Եվրոպայում։'
  },
  stats: {
    tr: 'Sunum verilerine göre kanıtlanmış sonuçlar:\n• 24+ kurumsal AI entegrasyonu\n• €24K – €2M+ yıllık ROI tasarruf amplitüdü\n• %98,4 otonom akış başarısı\n• 5 ülkede küresel operasyon\n• %70\'e varan operasyon otomasyonu (veri girişi ve destek)\n• Geceden gelen taleplerin %34\'ü ek insan gücü olmadan sıcak lead\'e dönüşür (Madrid referansı)',
    en: 'Presentation metrics:\n• 24+ corporate AI integrations\n• €24K – €2M+ annual ROI savings amplitude\n• 98.4% autonomous flow success\n• Global ops in 5 countries\n• Up to 70% automation of data entry & support\n• 34% of overnight inquiries become warm leads without extra staff (Madrid case)',
    es: 'Métricas del informe:\n• 24+ integraciones IA corporativas\n• €24K – €2M+ amplitud ROI anual\n• 98,4% éxito de flujo autónomo\n• 5 países\n• Hasta 70% automatización\n• 34% de consultas nocturnas → leads calientes',
    ru: 'Показатели:\n• 24+ корпоративных ИИ-интеграций\n• €24K – €2M+ годовая экономия ROI\n• 98,4% успех автономного потока\n• 5 стран\n• До 70% автоматизации\n• 34% ночных запросов → тёплые лиды',
    hy: 'Ցուցանիշներ՝\n• 24+ կորպորատիվ AI ինտեգրացիա\n• €24K – €2M+ տարեկան ROI խնայողություն\n• 98,4% ինքնավար հոսքի հաջողություն\n• 5 երկիր\n• Մինչև 70% ավտոմատացում\n• Գիշերային հարցումների 34%-ը՝ տաք լիդ առանց լրացուցիչ անձնակազմի'
  },
  agents: {
    tr: 'Otonom Satış ve Destek Ajanları — 5 temel tip (sunum slaytı):\n\n🤝 Asistan — randevu, follow-up, günlük operasyon\n🛡️ Moderator — topluluk/kanal moderasyonu\n🎯 Hedef Kitle — segment analizi, kişiselleştirilmiş mesaj\n📚 Eğitici — onboarding ve kullanıcı eğitimi\n⚖️ Mesleki — finans, hukuk, teknik danışmanlık\n\nSatış ajanları bütçe analizi yapar, satışı kapatır, ödeme linki üretir. CRM günceller; WhatsApp, Telegram ve Web\'de 7/24 çalışır. Strateji: Düşün → Karar Ver → Eyleme Geç.',
    en: 'Autonomous Sales & Support Agents — 5 core types:\n\n🤝 Assistant — scheduling, follow-ups, daily ops\n🛡️ Moderator — community/channel moderation\n🎯 Target Audience — segmentation & personalized outreach\n📚 Educator — onboarding & training\n⚖️ Professional — finance, legal, technical advisory\n\nSales agents analyze budgets, close deals, generate payment links. CRM sync; 24/7 on WhatsApp, Telegram, Web. Strategy: Think → Decide → Act.',
    es: 'Agentes Autónomos — 5 tipos: Asistente, Moderador, Público objetivo, Educador, Profesional. Analizan presupuestos, cierran ventas, integran CRM. 24/7 en WhatsApp, Telegram y Web.',
    ru: 'Автономные агенты — 5 типов: Ассистент, Модератор, Целевая аудитория, Обучающий, Профессиональный. Анализ бюджета, закрытие сделок, CRM. 24/7 на WhatsApp, Telegram, Web.',
    hy: 'Ինքնավար գործակալներ — 5 տեսակ՝ Օգնական, Մոդերատոր, Թիրախային լսարան, Դասատու, Մասնագիտական։ Բյուջեի վերլուծություն, գործարքների փակում, CRM։ 7/24 WhatsApp, Telegram, Web։'
  },
  roi: {
    tr: 'ROI Tasarruf Amplitüdü (sunum slayt 04 — %100 gerçek ROI analizine dayalı):\n• Küçük işletme / bireysel: €24K – €87K/yıl\n• Orta ölçek: €80K – €350K/yıl\n• Kurumsal / dijital ekip: €400K – €2M+/yıl\n\nAI ajan avantajı: personel gideri yok, tatil yok, maaş talebi yok — 7/24 kesintisiz. Gece ve hafta sonu taleplerini ek maliyet olmadan dönüştürürler. Sitedeki ROI hesaplayıcıyı da kullanabilirsiniz.',
    en: 'ROI Savings Amplitude (presentation slide 04):\n• Small business: €24K – €87K/year\n• Mid-scale: €80K – €350K/year\n• Enterprise: €400K – €2M+/year\n\nAI agents: no payroll, holidays or salary — 24/7. Convert overnight/weekend inquiries at no extra cost.',
    es: 'Amplitud ROI: Pequeña €24K-87K, Media €80K-350K, Corporativa €400K-2M+. Sin costos de personal, 24/7.',
    ru: 'ROI: малый €24K-87K, средний €80K-350K, корпоратив €400K-2M+. Без затрат на персонал, 24/7.',
    hy: 'ROI միջակայքներ՝ փոքր €24K-87K, միջին €80K-350K, կորպորատիվ €400K-2M+։ 7/24 առանց աշխատավարձի և արձակուրդի։'
  },
  bots: {
    tr: 'AI Botları (sunum):\n• WhatsApp & Telegram — ilk saniyede trafik yakalama, filtreleme, CRM\'e sıcak lead aktarımı\n• Veri toplama botları — rakip fiyatı, trend ve finansal hareket takibi\n• Bildirim botları — stok, sipariş, sunucu hatalarında anında SMS/WhatsApp raporu\n\nAPI tabanlı resmi entegrasyonlar; dinamik menü ve form kurguları.',
    en: 'AI Bots:\n• WhatsApp & Telegram — capture traffic in the first second, filter, transfer hot leads to CRM\n• Data scrapers — competitor prices, trends, financial movements\n• Notification bots — instant SMS/WhatsApp alerts for stock, orders, server errors\n\nOfficial API integrations; dynamic menus and forms.',
    es: 'Bots IA: WhatsApp y Telegram, recolección de datos, bots de notificación. Integraciones API oficiales.',
    ru: 'ИИ-боты: WhatsApp и Telegram, сбор данных, уведомления. Официальные API-интеграции.',
    hy: 'AI բոտեր՝ WhatsApp և Telegram, տվյալների հավաքում, ծանուցումներ։ Պաշտոնական API ինտեգրացիաներ։'
  },
  crm: {
    tr: 'Kurumsal entegrasyon (sunum): Salesforce, HubSpot, Bitrix24 ve özel API\'ler. ERP/CRM entegrasyonu; sektörel operasyon ajanları back-office, e-ticaret stok, lojistik ve finansal mutabakatı insan müdahalesi olmadan çözer. Web widget + WhatsApp + Telegram tek admin panelde birleşir.',
    en: 'Corporate integration: Salesforce, HubSpot, Bitrix24, custom APIs. ERP/CRM; sector agents handle back-office, inventory, logistics, reconciliation. Web + WhatsApp + Telegram in one admin panel.',
    es: 'Integración: Salesforce, HubSpot, Bitrix24. Web + WhatsApp + Telegram en un panel.',
    ru: 'Интеграция: Salesforce, HubSpot, Bitrix24. Web + WhatsApp + Telegram в одной панели.',
    hy: 'Ինտեգրացիա՝ Salesforce, HubSpot, Bitrix24։ Web + WhatsApp + Telegram մեկ վահանակում։'
  },
  process: {
    tr: 'ROI odaklı uygulama süreci (sunum + site):\n1️⃣ Keşif & ROI analizi (1 hafta)\n2️⃣ Mimari tasarım (1-2 hafta)\n3️⃣ 30 günlük pilot — gerçek KPI ölçümü\n4️⃣ Ölçeklendirme — kanıtlanmış ROI ile tam kurulum\n\nPilot genelde 2-4 haftada devreye girer. Hedef tutmazsa pilot ücreti iade edilir.',
    en: 'ROI-focused implementation:\n1️⃣ Discovery & ROI analysis (1 week)\n2️⃣ Architecture design (1-2 weeks)\n3️⃣ 30-day pilot with real KPIs\n4️⃣ Scale with proven ROI\n\nPilot live in 2-4 weeks. Pilot fee refunded if targets not met.',
    es: 'Proceso: Descubrimiento → Diseño → Piloto 30 días → Escala. Piloto en 2-4 semanas.',
    ru: 'Этапы: Анализ → Проектирование → Пилот 30 дней → Масштабирование. Пилот за 2-4 недели.',
    hy: 'Փուլեր՝ վերլուծություն → նախագիծ → 30 օրյա փայլոտ → մասշտաբավորում։ Փայլոտը 2-4 շաբաթում։'
  },
  pricing: {
    tr: 'Fiyatlandırma işletme ölçeğine göre özelleştirilir — sabit paket değil, ROI odaklı model. 30 günlük pilot ile ölçülebilir KPI; hedef tutmazsa pilot ücreti iade. Ücretsiz 15 dakikalık proje keşif görüşmesi için iletişim bırakabilirsiniz.',
    en: 'Pricing customized by scale — ROI-focused, not one-size-fits-all. 30-day pilot with KPIs; fee refunded if targets not met. Free 15-minute discovery call available.',
    es: 'Precios personalizados según escala. Piloto 30 días con KPIs medibles.',
    ru: 'Цена по масштабу. Пилот 30 дней, возврат при невыполнении целей. Бесплатная 15-минутная консультация.',
    hy: 'Գինը ըստ մասշտաբի։ 30 օրյա փայլոտ։ 15 րոպե անվճար խորհրդատվություն։'
  },
  projects: {
    tr: 'Canlı proje örnekleri (sunum):\n• Hamov Bakery — üretim hattı ve müşteri taleplerini bağlayan AI gıda operasyon otomasyonu\n• RSW TR Invest Group — premium kurumsal başarı portalı, dönüşüm odaklı altyapı\n• Çok kanallı satış botları (Telegram + WhatsApp + Web)\n\nSistemler aktif ve küresel ölçekte yayındadır.',
    en: 'Live projects:\n• Hamov Bakery — AI food operations linking production and customer demand\n• RSW TR Invest Group — premium corporate success portal\n• Multi-channel sales bots (Telegram + WhatsApp + Web)\n\nSystems active globally.',
    es: 'Proyectos: Hamov Bakery, RSW TR Invest Group, bots multicanal. Sistemas activos globalmente.',
    ru: 'Проекты: Hamov Bakery, RSW TR Invest Group, мультиканальные боты. Системы работают глобально.',
    hy: 'Նախագծեր՝ Hamov Bakery, RSW TR Invest Group, բազմալիք վաճառքի բոտեր։ Համակարգերը ակտիվ են գլոբալ մասշտաբով։'
  },
  ecommerce: {
    tr: 'İleri nesil e-ticaret (sunum): davranışa göre anlık teklifler, sepet terk AI indirim kancaları, ML tabanlı kişiselleştirilmiş vitrin. Stripe, PayPal ve kargo API uçtan uca entegrasyon. 5 dilde fiyat/stok, yerel KDV/VAT uyumu. Front Office + Back Office + Admin Panel mimarisi.',
    en: 'Next-gen e-commerce: behavior-based offers, cart abandonment AI hooks, ML storefront. Stripe, PayPal, shipping APIs. 5-language pricing/stock, local VAT. Front + Back + Admin architecture.',
    es: 'E-commerce: ofertas por comportamiento, abandono de carrito IA, Stripe/PayPal. 5 idiomas, IVA local.',
    ru: 'E-commerce: предложения по поведению, ИИ против брошенных корзин, Stripe/PayPal. 5 языков, НДС.',
    hy: 'E-commerce՝ վարքի հիման վրա առաջարկներ, զամբյուղի լքման AI, Stripe/PayPal։ 5 լեզու, ԱԱՀ։'
  },
  landing: {
    tr: 'Landing page stratejisi (sunum):\n• Minik işletme: 3 sn\'de net değer, WhatsApp/forma yönlendirme, mobil hız\n• Büyük işletme: GA4, Pixel, Server-Side Tagging, CRM hunisi, çoklu dil\n\nHuni stratejisi: doğru ölçek, doğru bütçe, maksimum dönüşüm.',
    en: 'Landing strategy:\n• Small business: 3-second value prop, WhatsApp/form CTA, mobile speed\n• Enterprise: GA4, Pixel, server-side tagging, CRM funnels, multi-language\n\nRight scale, right budget, maximum conversion.',
    es: 'Landing: pequeña empresa (CTA rápido) vs gran empresa (tracking profundo, CRM).',
    ru: 'Landing: малый бизнес (быстрый CTA) vs крупный (глубокий трекинг, CRM).',
    hy: 'Landing՝ փոքր բիզնես (արագ CTA) vs մեծ (խորը հետևում, CRM)։'
  },
  presentation: {
    tr: 'Kurumsal sunumu görüntülemek için sitedeki "Sunumu Görüntüle" bağlantısını veya footer\'daki sunum linkini kullanabilirsiniz. 14 slaytlık tam sunum: profil, ROI amplitüdü, ajan tipleri, botlar, site mimarisi, e-ticaret, referans projeler.',
    en: 'View the full corporate presentation via "View Presentation" on the site footer. 14 slides: profile, ROI amplitude, agent types, bots, site architecture, e-commerce, reference projects.',
    es: 'Vea la presentación completa en el enlace "Ver Presentación" del sitio.',
    ru: 'Полная презентация — ссылка «Смотреть презентацию» в подвале сайта. 14 слайдов.',
    hy: 'Լրիվ ներկայացումը՝ կայքի «Դիտել Ներկայացում» հղումով։ 14 սլայդ։'
  }
};

const KB_TOPIC_PATTERNS = [
  { topic: 'about', re: /gor kim|who is gor|quién es|кто такой|ով է|kimdir|özgeçmiş|profile|profil|կենսագիր|ekonomist|mühendis/i },
  { topic: 'stats', re: /istatistik|metric|kanıt|proof|98|70%|34%|24\+|başarı|success|հաջողություն|показател/i },
  { topic: 'agents', re: /ajan|agent|gortsal|գործակալ|агент|asistan|moderator|eğitici|mesleki|hedef kitle|assistant|educator|professional/i },
  { topic: 'roi', re: /roi|tasarruf|ahorro|խնայ|эконом|24k|350k|2m|amplitüd|amplitude/i },
  { topic: 'bots', re: /whatsapp|telegram bot|scraper|kazıma|bildirim|notification|բոտ|бот(?!father)/i },
  { topic: 'crm', re: /crm|salesforce|hubspot|bitrix|erp|entegrasyon|integrat|ինտեգր/i },
  { topic: 'process', re: /pilot|süreç|process|proceso|процесс|փուլ|keşif|discovery|timeline|hafta|week/i },
  { topic: 'pricing', re: /fiyat|ücret|price|pricing|precio|стоимость|գին|maliyet|cost|ücretsiz|free|gratis/i },
  { topic: 'projects', re: /hamov|bakery|referans|project|proje|proyecto|նախագիծ|проект|rsw|örnek/i },
  { topic: 'ecommerce', re: /e-ticaret|ecommerce|e-commerce|sepet|cart|stripe|paypal|ödeme|payment/i },
  { topic: 'landing', re: /landing|açılış sayfası|huni|funnel|cta|dönüşüm|conversion/i },
  { topic: 'presentation', re: /sunum|presentación|presentation|ներկայացում|презентац|slayt|slide|pdf/i }
];

function getPresentationAnswer(topic, lang) {
  const block = PRESENTATION_KB[topic];
  if (!block) return '';
  return block[lang] || block.tr || '';
}

function matchPresentationTopic(lower) {
  for (const { topic, re } of KB_TOPIC_PATTERNS) {
    if (re.test(lower)) return topic;
  }
  return null;
}

window.PRESENTATION_KB = PRESENTATION_KB;
window.getPresentationAnswer = getPresentationAnswer;
window.matchPresentationTopic = matchPresentationTopic;
