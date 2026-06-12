const TELEGRAM_BOT_USERNAME = window.GOR_TELEGRAM?.botUsername || 'Gor_OffLife_kartvisit_bot';
const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_USERNAME}`;
const TELEGRAM_LEAD_API = window.GOR_TELEGRAM?.leadApi || '/api/telegram-lead';

const MSG = {
  welcome: {
    tr: 'Merhaba! 👋 Ben Gor Sargsyan ekibinin AI satış mühendisiyim. Ekonomi ve yapay zeka mühendisliği geçmişiyle işletmelere ölçülebilir ROI sunuyoruz.\n\nBurada rahatça sohbet edebilirsiniz — sorularınızı yanıtlarım, ihtiyacınızı birlikte netleştiririz. Sonra size özel rapor veya geri arama için iletişim bilgisi isteyebilirim.\n\nBaşlamak için adınızı yazar mısınız?',
    en: 'Hello! 👋 I\'m the AI sales engineer on Gor Sargsyan\'s team. We deliver measurable ROI through economics and AI engineering.\n\nFeel free to chat here — I\'ll answer your questions and clarify your needs. Later I may ask for contact details for a custom report or callback.\n\nTo start, may I have your name?',
    es: '¡Hola! 👋 Soy el ingeniero de ventas IA del equipo de Gor Sargsyan. Ofrecemos ROI medible con economía e ingeniería de IA.\n\nPuede conversar aquí con tranquilidad — responderé sus preguntas y aclararemos sus necesidades juntos.\n\nPara empezar, ¿cuál es su nombre?',
    ru: 'Здравствуйте! 👋 Я ИИ-инженер по продажам команды Gor Sargsyan. Мы обеспечиваем измеримый ROI через экономику и ИИ-инженерию.\n\nМожете спокойно общаться здесь — отвечу на вопросы и помогу уточнить задачу.\n\nДля начала, как вас зовут?',
    hy: 'Բարև! 👋 Ես Gor Sargsyan թիմի AI վաճառքի ճարտարագետն եմ։ Չափելի ROI ենք ապահովում տնտեսությամբ և AI ճարտարագիտությամբ։\n\nԱյստեղ կարող եք հանգիստ խոսել — կպատասխանեմ հարցերին և միասին կպարզաբերենք կարիքները։\n\nՍկսելու համար գրեք ձեր անունը։'
  },
  askBusiness: {
    tr: 'Memnun oldum{name}! Hangi sektörde faaliyet gösteriyorsunuz ve kısaca ne satıyor veya hangi hizmeti sunuyorsunuz?',
    en: 'Nice to meet you{name}! What industry are you in, and what do you sell or offer in a few words?',
    es: '¡Encantado{name}! ¿En qué sector opera y qué vende u ofrece brevemente?',
    ru: 'Приятно познакомиться{name}! В какой отрасли вы работаете и что продаёте или предлагаете?',
    hy: 'Ուրախ եմ{name}! Ո՞ր ոլորտում եք և ի՞նչ եք վաճառում կամ առաջարկում։'
  },
  askVolume: {
    tr: 'Anladım. Aylık yaklaşık kaç müşteri talebi, mesaj veya lead alıyorsunuz? (Tahmini bir sayı yeterli — örn. 100, 500, 2000)',
    en: 'Got it. Roughly how many customer inquiries, messages or leads do you get per month? (An estimate is fine — e.g. 100, 500, 2000)',
    es: 'Entendido. ¿Cuántas consultas o leads recibe al mes aproximadamente?',
    ru: 'Понял. Сколько примерно запросов или лидов в месяц? (Достаточно оценки)',
    hy: 'Հասկացա։ Մոտավորապես քանի՞ հարցում կամ լիդ եք ստանում ամսական։'
  },
  askTeam: {
    tr: 'Peki dijital pazarlama veya müşteri destek ekibiniz var mı? Kaç kişilik? (Yoksa "yok" yazmanız yeterli)',
    en: 'Do you have a digital marketing or support team? How many people? (Type "none" if not applicable)',
    es: '¿Tiene equipo de marketing digital o soporte? ¿Cuántas personas?',
    ru: 'Есть ли у вас команда маркетинга или поддержки? Сколько человек?',
    hy: 'Կա՞ թվային մարքեթինգի կամ աջակցության թիմ։ Քանի՞ մարդ։'
  },
  askGoal: {
    tr: 'Son bir soru: Öncelikli hedefiniz nedir?\n• Daha fazla satış / lead\n• 7/24 müşteri desteği\n• Operasyon maliyetini düşürmek\n• Hepsi',
    en: 'Last question: What is your main goal?\n• More sales / leads\n• 24/7 customer support\n• Lower operational costs\n• All of the above',
    es: 'Última pregunta: ¿Cuál es su objetivo principal?\n• Más ventas / leads\n• Soporte 24/7\n• Reducir costos operativos\n• Todo lo anterior',
    ru: 'Последний вопрос: Какая главная цель?\n• Больше продаж / лидов\n• Поддержка 24/7\n• Снижение операционных затрат\n• Всё перечисленное',
    hy: 'Վերջին հարց՝ ձեր գլխավոր նպատակը՞\n• Ավելի վաճառք / լիդ\n• 7/24 աջակցություն\n• Ծախսերի նվազեցում\n• Բոլորը'
  },
  insight: {
    tr: 'Teşekkürler {name}! Verilerinize göre tahmini yıllık tasarruf aralığınız **{range}** civarında olabilir.\n\nAI ajanlarımız personel gideri, tatil veya maaş talebi olmadan 7/24 çalışır; gece gelen taleplerin önemli kısmını ek maliyet olmadan sıcak lead\'e dönüştürür.\n\nBaşka sorunuz varsa buradan yazabilirsiniz. İsterseniz size özel ücretsiz ROI raporu veya 15 dk strateji görüşmesi ayarlayabilirim.',
    en: 'Thank you {name}! Based on your inputs, estimated annual savings could be around **{range}**.\n\nOur AI agents work 24/7 with no payroll, holidays or salary demands — converting overnight inquiries into warm leads at no extra labor cost.\n\nAsk anything here. I can also arrange a free custom ROI report or a 15-minute strategy call.',
    es: '¡Gracias {name}! Según sus datos, el ahorro anual estimado podría rondar **{range}**.\n\nNuestros agentes IA trabajan 24/7 sin costos de personal ni vacaciones.\n\nPuede seguir preguntando aquí o solicitar un informe ROI gratuito.',
    ru: 'Спасибо {name}! По вашим данным годовая экономия может составить **{range}**.\n\nИИ-агенты работают 24/7 без затрат на персонал и отпуска.\n\nМожете продолжать спрашивать здесь или запросить бесплатный ROI отчёт.',
    hy: 'Շնորհակալություն {name}! Ձեր տվյալներով տարեկան խնայողությունը մոտ **{range}** կարող է լինել։\n\nAI գործակալները աշխատում են 7/24 առանց աշխատավարձի և արձակուրդի ծախսերի։'
  },
  offerContact: {
    tr: 'Ücretsiz ROI raporu veya geri arama için adınızı ve e-posta ya da telefon numaranızı paylaşır mısınız? (Örn: Ahmet, ahmet@firma.com)',
    en: 'For a free ROI report or callback, please share your name and email or phone. (e.g. John, john@company.com)',
    es: 'Para un informe ROI gratuito o llamada, comparta nombre y correo o teléfono.',
    ru: 'Для бесплатного ROI отчёта или звонка укажите имя и email или телефон.',
    hy: 'Անվճար ROI հաշվետվության կամ զանգի համար տրամադրեք անուն և email կամ հեռախոս։'
  },
  thanks: {
    tr: 'Harika, {name}! Bilgileriniz @Gor_OffLife_kartvisit_bot kanalına iletildi — Gor 24 saat içinde dönüş yapacak.\n\n🆔 Oturum kodu: {session}\n\nBuradan sohbete devam edebilir veya aynı botta yazışmaya geçebilirsiniz (üstteki Telegram ikonu). Yeni bot yok, tek kanal.',
    en: 'Great, {name}! Your details were sent via @Gor_OffLife_kartvisit_bot — Gor will respond within 24 hours.\n\n🆔 Session: {session}\n\nContinue here or open the same bot (Telegram icon above). One bot, one thread.',
    es: '¡Perfecto, {name}! Datos enviados por @Gor_OffLife_kartvisit_bot. Respuesta en 24 h. Sesión: {session}',
    ru: 'Отлично, {name}! Данные отправлены через @Gor_OffLife_kartvisit_bot. Ответ в течение 24 ч. Сессия: {session}',
    hy: 'Հիանալի, {name}! Տվյալները ուղարկվել են @Gor_OffLife_kartvisit_bot-ով։ Սեսիա՝ {session}'
  },
  thanksFallback: {
    tr: 'Teşekkürler {name}! Bilgileriniz kaydedildi. Sunucu köprüsü henüz aktif değilse Gor\'a ulaşmak için üstteki Telegram ikonuna tıklayın — aynı @Gor_OffLife_kartvisit_bot açılır, oturum kodunuz: {session}',
    en: 'Thanks {name}! Details saved. Tap the Telegram icon to open the same @Gor_OffLife_kartvisit_bot with session: {session}',
    es: 'Gracias {name}. Toque el icono de Telegram — mismo bot. Sesión: {session}',
    ru: 'Спасибо {name}. Нажмите иконку Telegram — тот же бот. Сессия: {session}',
    hy: 'Շնորհակալություն {name}։ Սեղմեք Telegram պատկերակը՝ նույն բոտը։'
  },
  telegramHandoff: {
    tr: 'Aynı botu açıyorum: @Gor_OffLife_kartvisit_bot\n\nWeb görüşmeniz oturum {session} ile bağlı. Orada da yazmaya devam edebilirsiniz — farklı bir bota geçmiyorsunuz.',
    en: 'Opening the same bot: @Gor_OffLife_kartvisit_bot\n\nYour web chat is linked via session {session}.',
    es: 'Abriendo el mismo bot: @Gor_OffLife_kartvisit_bot. Sesión: {session}',
    ru: 'Открываю тот же бот: @Gor_OffLife_kartvisit_bot. Сессия: {session}',
    hy: 'Բացում եմ նույն բոտը՝ @Gor_OffLife_kartvisit_bot։ Սեսիա՝ {session}'
  },
  stayHere: {
    tr: 'Evet, kesinlikle buradan devam edebiliriz! 🙌 Telegram\'a yönlendirmek zorunda değilsiniz. Sorularınızı burada yanıtlıyorum ve görüşme özetini Gor\'a iletiyorum.\n\nNe hakkında konuşmak istersiniz — satış ajanları, ROI, entegrasyon veya fiyatlandırma?',
    en: 'Yes, absolutely — we can continue right here! 🙌 No need to switch to Telegram. I answer here and pass a summary to Gor.\n\nWhat would you like to discuss — sales agents, ROI, integration or pricing?',
    es: '¡Sí, podemos continuar aquí! No necesita ir a Telegram. ¿Sobre qué desea hablar?',
    ru: 'Да, конечно, продолжим здесь! 🙌 В Telegram переходить не обязательно. О чём хотите поговорить?',
    hy: 'Այո, շարունակենք այստեղ! Telegram պարտադիր չէ։ Ինչի՞ մասին եք ուզում խոսել։'
  },
  agentsExplain: {
    tr: 'Otonom satış ve destek ajanlarımız 5 tipte yapılandırılır:\n\n🤝 **Asistan** — randevu, follow-up, günlük operasyon\n🛡️ **Moderator** — topluluk ve kanal moderasyonu\n🎯 **Hedef kitle** — segment ve kişiselleştirilmiş mesaj\n📚 **Eğitici** — onboarding ve kullanıcı eğitimi\n⚖️ **Mesleki** — finans, hukuk, teknik danışmanlık\n\nMüşteri bütçesini analiz eder, CRM günceller, WhatsApp/Telegram/Web\'de 7/24 çalışır. Pilot kurulum genelde 2-4 hafta.\n\nSizin işletmeniz için hangisi daha kritik görünüyor?',
    en: 'Our autonomous sales & support agents come in 5 types:\n\n🤝 Assistant — scheduling & follow-ups\n🛡️ Moderator — community management\n🎯 Target audience — segmentation & outreach\n📚 Educator — onboarding & training\n⚖️ Professional — finance, legal, technical advisory\n\nThey analyze budgets, update CRM, work 24/7 on WhatsApp/Telegram/Web. Pilot setup: typically 2-4 weeks.\n\nWhich matters most for your business?',
    es: 'Nuestros agentes autónomos tienen 5 tipos: Asistente, Moderador, Público objetivo, Educador y Profesional. Trabajan 24/7 e integran CRM. Piloto: 2-4 semanas.',
    ru: 'Наши агенты: Ассистент, Модератор, Целевая аудитория, Обучающий, Профессиональный. Работают 24/7, интеграция CRM. Пилот: 2-4 недели.',
    hy: 'Մեր գործակալները՝ Օգնական, Մոդերատոր, Թիրախային լսարան, Դասատու, Մասնագիտական։ 7/24 աշխատանք, CRM ինտեգրացիա։'
  },
  roiExplain: {
    tr: 'ROI hesabımız işletme ölçeğinize göre geniş bir aralık gösterir:\n• Küçük işletme: ~€24K – €87K/yıl\n• Orta ölçek: ~€80K – €350K/yıl\n• Kurumsal / dijital ekip: ~€400K – €2M+/yıl\n\nAI ajanlarında personel gideri, tatil ve maaş yok — 7/24 kesintisiz çalışırlar. Sitedeki ROI hesaplayıcıyı da kullanabilirsiniz.\n\nAylık kaç talep aldığınızı söylerseniz size özel aralık hesaplayabilirim.',
    en: 'Our ROI model shows a wide range by business scale:\n• Small: ~€24K – €87K/year\n• Mid-scale: ~€80K – €350K/year\n• Enterprise: ~€400K – €2M+/year\n\nAI agents have no payroll, holidays or salary — they run 24/7.\n\nShare your monthly inquiry volume for a custom estimate.',
    es: 'ROI por escala: Pequeña €24K-87K, Media €80K-350K, Corporativa €400K-2M+. Sin costos de personal, 24/7.',
    ru: 'ROI по масштабу: малый €24K-87K, средний €80K-350K, корпоратив €400K-2M+. Без затрат на персонал, 24/7.',
    hy: 'ROI միջակայքներ՝ փոքր €24K-87K, միջին €80K-350K, կորպորատիվ €400K-2M+։ 7/24 առանց աշխատավարձի։'
  },
  pilotExplain: {
    tr: 'Tipik süreç:\n1️⃣ **Keşif & ROI analizi** (1 hafta)\n2️⃣ **Mimari tasarım** (1-2 hafta)\n3️⃣ **Pilot & ölçüm** (30 gün — gerçek KPI)\n4️⃣ **Ölçeklendirme** — kanıtlanmış ROI ile tam kurulum\n\nPilot genelde 2-4 haftada devreye girer. CRM entegrasyonu (Salesforce, HubSpot, Bitrix24) mümkündür.\n\nHangi aşamada yardım istersiniz?',
    en: 'Typical process:\n1️⃣ Discovery & ROI analysis\n2️⃣ Architecture design\n3️⃣ 30-day pilot with real KPIs\n4️⃣ Scale with proven ROI\n\nPilot goes live in 2-4 weeks. CRM integration available.\n\nWhich stage interests you?',
    es: 'Proceso: Descubrimiento → Diseño → Piloto 30 días → Escala. Piloto en 2-4 semanas.',
    ru: 'Этапы: Анализ → Проектирование → Пилот 30 дней → Масштабирование. Пилот за 2-4 недели.',
    hy: 'Փուլեր՝ վերլուծություն → նախագիծ → 30 օրյա փայլոտ → մասշտաբավորում։'
  },
  crmExplain: {
    tr: 'Evet, mevcut CRM\'inizle entegre oluruz: Salesforce, HubSpot, Bitrix24 ve özel API\'ler. Web widget, WhatsApp ve Telegram tek panelde birleşir.\n\nHangi CRM kullanıyorsunuz?',
    en: 'Yes — we integrate with Salesforce, HubSpot, Bitrix24 and custom APIs. Web, WhatsApp and Telegram merge in one panel.\n\nWhich CRM do you use?',
    es: 'Sí, integramos con Salesforce, HubSpot, Bitrix24 y APIs personalizadas.',
    ru: 'Да, интеграция с Salesforce, HubSpot, Bitrix24 и custom API. Единая панель.',
    hy: 'Այո, ինտեգրացիա Salesforce, HubSpot, Bitrix24 և անհատական API-ների հետ։'
  },
  pricingExplain: {
    tr: 'Fiyatlandırma işletme ölçeğinize ve entegrasyon kapsamına göre özelleştirilir — sabit paket yerine ROI odaklı model kullanıyoruz. 30 günlük pilot ile ölçülebilir KPI belirlenir; hedef tutmazsa pilot ücreti iade edilir.\n\nÜcretsiz 15 dakikalık keşif görüşmesi için iletişim bilgisi bırakabilirsiniz.',
    en: 'Pricing is customized by scale and integration scope — ROI-focused, not one-size-fits-all. 30-day pilot with measurable KPIs; pilot fee refunded if targets aren\'t met.\n\nLeave contact details for a free 15-minute discovery call.',
    es: 'Precios personalizados según escala. Piloto 30 días con KPIs medibles.',
    ru: 'Цена зависит от масштаба. Пилот 30 дней с KPI, возврат при невыполнении целей.',
    hy: 'Գինը ըստ մասշտաբի։ 30 օրյա փայլոտ չափելի KPI-ներով։'
  },
  humanSoft: {
    tr: 'Tabii ki! Gor veya ekibiyle doğrudan görüşmek isterseniz size geri arama ayarlayabilirim — ad ve telefon/e-posta yeterli.\n\nAcil durumda:\n📧 gor077887@gmail.com\n🇪🇸 +34 678 27 66 26\n🇷🇺 +7 922 091 82 18\n\nÖnce buradan devam etmek isterseniz de memnuniyetle yardımcı olurum.',
    en: 'Of course! I can schedule a callback — just share name and phone/email.\n\nUrgent:\n📧 gor077887@gmail.com\n🇪🇸 +34 678 27 66 26\n🇷🇺 +7 922 091 82 18\n\nHappy to continue here too.',
    es: '¡Por supuesto! Puedo programar una llamada. Urgente: gor077887@gmail.com',
    ru: 'Конечно! Могу организовать звонок. Срочно: gor077887@gmail.com, +34 678 27 66 26',
    hy: 'Իհարկե! Կարող եմ կազմակերպել զանգ։ gor077887@gmail.com'
  },
  telegramOptional: {
    tr: 'Tabii — ama yeni bir bot değil, zaten kullandığımız @Gor_OffLife_kartvisit_bot açılır. Web sohbetiniz aynı oturum koduyla oraya bağlanır.\n\nİsterseniz burada kalmaya da devam edebilirsiniz. Telegram\'a geçmemi ister misiniz?',
    en: 'Sure — not a new bot, we open the same @Gor_OffLife_kartvisit_bot linked to this web session.\n\nYou can also stay here. Open Telegram?',
    es: 'Mismo bot @Gor_OffLife_kartvisit_bot, vinculado a esta sesión web.',
    ru: 'Тот же бот @Gor_OffLife_kartvisit_bot, связанный с веб-сессией.',
    hy: 'Նույն @Gor_OffLife_kartvisit_bot բոտը՝ web սեսիայի հետ կապված։'
  },
  clarify: {
    tr: 'İlginiz için teşekkürler! Biraz daha açar mısınız — satış ajanı mı, ROI mi, entegrasyon mu, yoksa fiyatlandırma mı düşünüyorsunuz?',
    en: 'Thanks for your message! Could you tell me more — sales agents, ROI, integration or pricing?',
    es: '¿Podría precisar — agentes, ROI, integración o precios?',
    ru: 'Уточните, пожалуйста — агенты, ROI, интеграция или цены?',
    hy: 'Մանրամասնեք՝ գործակալներ, ROI, ինտեգրացիա թե գին։'
  },
  greetBack: {
    tr: 'Merhaba! Size nasıl yardımcı olabilirim? İşletmenizi tanıyabilir veya ürünlerimiz hakkında soru yanıtlayabilirim.',
    en: 'Hello! How can I help? I can learn about your business or answer product questions.',
    es: '¡Hola! ¿En qué puedo ayudarle?',
    ru: 'Здравствуйте! Чем могу помочь?',
    hy: 'Բարև! Ինչպե՞ս կարող եմ օգնել։'
  },
  yesReport: {
    tr: 'Harika seçim! Ücretsiz ROI raporu için adınızı ve e-posta veya telefon numaranızı yazın.',
    en: 'Great choice! For your free ROI report, please type your name and email or phone.',
    es: '¡Excelente! Escriba nombre y correo o teléfono para el informe ROI.',
    ru: 'Отлично! Напишите имя и email или телефон для ROI отчёта.',
    hy: 'Հիանալի! Գրեք անուն և email կամ հեռախոս ROI հաշվետվության համար։'
  }
};

const QUICK_SETS = {
  welcome: ['chat.quickHello', 'chat.quickAgents', 'chat.quickRoi'],
  consult: ['chat.quickReport', 'chat.quickQuestion', 'chat.quickHuman'],
  done: ['chat.quickRestart', 'chat.quickAgents', 'chat.quickRoi']
};

class SalesAgent {
  constructor() {
    this.step = 'welcome';
    this.leadData = { name: '', contact: '', business: '', leads: 0, team: 0, goal: '' };
    this.messagesEl = null;
    this.quickEl = null;
    this.inputEl = null;
    this.initialized = false;
    this.fallbackCount = 0;
    this.qualified = false;
    this.sessionId = this.getSessionId();
  }

  getSessionId() {
    try {
      let id = sessionStorage.getItem('gor-chat-session');
      if (!id) {
        id = Math.random().toString(36).slice(2, 10);
        sessionStorage.setItem('gor-chat-session', id);
      }
      return id;
    } catch {
      return Math.random().toString(36).slice(2, 10);
    }
  }

  getTranscript() {
    if (!this.messagesEl) return '';
    return Array.from(this.messagesEl.querySelectorAll('.chat-msg:not(.chat-msg--typing)'))
      .map(el => {
        const role = el.classList.contains('chat-msg--user') ? 'Ziyaretçi' : 'AI';
        return `${role}: ${el.textContent.trim()}`;
      })
      .filter(Boolean)
      .slice(-12)
      .join('\n');
  }

  init(messagesEl, quickEl, inputEl) {
    this.messagesEl = messagesEl;
    this.quickEl = quickEl;
    this.inputEl = inputEl;
    if (!this.initialized) {
      this.initialized = true;
      this.startConversation();
    }
  }

  m(key) {
    return MSG[key][currentLang] || MSG[key].tr;
  }

  fmt(text, vars = {}) {
    let out = text;
    const name = this.leadData.name ? `, ${this.leadData.name}` : '';
    out = out.replace('{name}', vars.name ?? this.leadData.name || '');
    out = out.replace('{name!}', name);
    out = out.replace('{range}', vars.range ?? '');
    return out;
  }

  startConversation() {
    this.step = 'welcome';
    this.leadData = { name: '', contact: '', business: '', leads: 0, team: 0, goal: '' };
    this.fallbackCount = 0;
    this.qualified = false;
    this.clearMessages();
    this.addBotMessage(this.m('welcome'));
    this.renderQuickButtons('welcome');
  }

  clearMessages() {
    if (this.messagesEl) this.messagesEl.innerHTML = '';
  }

  addBotMessage(text) {
    const formatted = text.replace(/\*\*(.*?)\*\*/g, '$1');
    this.showTyping(() => {
      const div = document.createElement('div');
      div.className = 'chat-msg chat-msg--bot';
      div.textContent = formatted;
      this.messagesEl.appendChild(div);
      this.scrollToBottom();
    });
  }

  addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-msg chat-msg--user';
    div.textContent = text;
    this.messagesEl.appendChild(div);
    this.scrollToBottom();
  }

  showTyping(callback) {
    const typing = document.createElement('div');
    typing.className = 'chat-msg chat-msg--bot chat-msg--typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    this.messagesEl.appendChild(typing);
    this.scrollToBottom();
    setTimeout(() => {
      typing.remove();
      callback();
    }, 500 + Math.random() * 350);
  }

  scrollToBottom() {
    if (this.messagesEl) this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }

  renderQuickButtons(setKey) {
    if (!this.quickEl) return;
    const keys = QUICK_SETS[setKey] || QUICK_SETS.consult;
    const actions = {
      'chat.quickHello': () => this.processMessage('merhaba, bilgi almak istiyorum'),
      'chat.quickAgents': () => this.processMessage('satış ajanları hakkında bilgi'),
      'chat.quickRoi': () => this.processMessage('roi analizi'),
      'chat.quickReport': () => this.processMessage('ücretsiz rapor istiyorum'),
      'chat.quickQuestion': () => this.processMessage('bir sorum var'),
      'chat.quickHuman': () => this.processMessage('insanla görüşmek istiyorum'),
      'chat.quickRestart': () => this.startConversation()
    };
    this.quickEl.innerHTML = '';
    keys.forEach(key => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-quick-btn';
      btn.textContent = t(key);
      btn.addEventListener('click', () => {
        this.addUserMessage(t(key));
        actions[key]?.();
      });
      this.quickEl.appendChild(btn);
    });
  }

  handleQuickAction(action) {
    const map = {
      hello: 'merhaba',
      agents: 'satış ajanları',
      roi: 'roi analizi',
      report: 'ücretsiz rapor',
      human: 'insanla konuş',
      telegram: 'telegram'
    };
    this.addUserMessage(t(`chat.quick${action.charAt(0).toUpperCase() + action.slice(1)}`) || action);
    this.processMessage(map[action] || action);
  }

  detectIntent(lower) {
    if (/buradan|burda|here|aquí|здесь|այստեղ|olmaz mı|devam|continue|seguir|продолж/i.test(lower)) return 'stayHere';
    if (/telegram|телеграм|✈️|t\.me/i.test(lower) && !/buradan|here|aquí/i.test(lower)) return 'telegram';
    if (/insan|human|humano|человек|մարդ|gor\b|geri arama|callback|call me/i.test(lower)) return 'human';
    if (/ajan|agent|bot|asistan|moderator|eğitici|mesleki|satış ajan/i.test(lower)) return 'agents';
    if (/roi|tasarruf|ahorro|эконом|խնայ|rapor|report|informe/i.test(lower)) return 'roi';
    if (/crm|salesforce|hubspot|bitrix|entegrasyon|integrat/i.test(lower)) return 'crm';
    if (/fiyat|ücret|price|pricing|precio|стоимость|գին|maliyet|cost/i.test(lower)) return 'pricing';
    if (/pilot|süre|hafta|week|timeline|ne kadar|how long|cuánto tarda/i.test(lower)) return 'pilot';
    if (/merhaba|hello|hola|здравств|բարև|selam|hey|günaydın|iyi günler/i.test(lower) && lower.length < 40) return 'greeting';
    if (/evet|yes|sí|да|այո|istiyorum|isterim|rapor|report|ücretsiz|free|gratis/i.test(lower) && this.step === 'consult') return 'wantReport';
    if (/hayır|no|не|ոչ|sonra|later|şimdilik/i.test(lower)) return 'decline';
    return null;
  }

  answerIntent(intent) {
    const handlers = {
      stayHere: () => { this.addBotMessage(this.m('stayHere')); this.step = 'consult'; this.renderQuickButtons('consult'); },
      telegram: () => { this.addBotMessage(this.m('telegramOptional')); this.step = 'consult'; },
      human: () => { this.addBotMessage(this.m('humanSoft')); this.step = 'collect_contact'; },
      agents: () => { this.addBotMessage(this.m('agentsExplain')); this.step = 'consult'; this.renderQuickButtons('consult'); },
      roi: () => { this.addBotMessage(this.m('roiExplain')); this.step = 'consult'; this.renderQuickButtons('consult'); },
      crm: () => { this.addBotMessage(this.m('crmExplain')); this.step = 'consult'; },
      pricing: () => { this.addBotMessage(this.m('pricingExplain')); this.step = 'consult'; },
      pilot: () => { this.addBotMessage(this.m('pilotExplain')); this.step = 'consult'; },
      greeting: () => { this.addBotMessage(this.m('greetBack')); },
      wantReport: () => { this.addBotMessage(this.m('yesReport')); this.step = 'collect_contact'; },
      decline: () => { this.addBotMessage(this.step === 'consult' ? this.m('greetBack') : this.m('clarify')); }
    };
    if (handlers[intent]) {
      handlers[intent]();
      this.fallbackCount = 0;
      return true;
    }
    return false;
  }

  processMessage(text) {
    const lower = text.toLowerCase().trim();

    if (lower === 'telegram' || /sadece telegram|open telegram|telegram aç/i.test(lower)) {
      this.addBotMessage(this.m('telegramOptional'));
      setTimeout(() => this.openTelegram({ announce: false }), 1200);
      return;
    }

    const intent = this.detectIntent(lower);
    if (intent && this.answerIntent(intent)) return;

    if (this.step === 'collect_contact' || this.step === 'done') {
      if (this.looksLikeContact(text)) {
        this.parseContact(text);
        this.saveLead();
        this.completeLeadHandoff();
        return;
      }
      this.addBotMessage(this.m('offerContact'));
      return;
    }

    if (this.step === 'welcome' || this.step === 'ask_name') {
      if (this.isLikelyName(text)) {
        this.leadData.name = this.capitalize(text.split(/[,]/)[0].trim());
        this.addBotMessage(this.m('askBusiness').replace('{name}', `, ${this.leadData.name}`));
        this.step = 'ask_business';
        return;
      }
      this.leadData.name = this.capitalize(text.slice(0, 40));
      this.addBotMessage(this.m('askBusiness').replace('{name}', `, ${this.leadData.name}`));
      this.step = 'ask_business';
      return;
    }

    if (this.step === 'ask_business') {
      this.leadData.business = text;
      const num = text.match(/\d+/);
      if (num) this.leadData.leads = parseInt(num[0], 10);
      this.addBotMessage(this.m('askVolume'));
      this.step = 'ask_volume';
      return;
    }

    if (this.step === 'ask_volume') {
      const num = text.match(/\d+/);
      if (num) this.leadData.leads = parseInt(num[0], 10);
      this.addBotMessage(this.m('askTeam'));
      this.step = 'ask_team';
      return;
    }

    if (this.step === 'ask_team') {
      const num = text.match(/\d+/);
      if (num) this.leadData.team = parseInt(num[0], 10);
      else if (/yok|none|no|нет|ոչ/i.test(lower)) this.leadData.team = 0;
      this.addBotMessage(this.m('askGoal'));
      this.step = 'ask_goal';
      return;
    }

    if (this.step === 'ask_goal') {
      this.leadData.goal = text;
      this.qualified = true;
      const range = this.estimateRange(this.leadData.leads || 300, this.leadData.team || 0);
      this.addBotMessage(this.fmt(this.m('insight'), { range }));
      this.step = 'consult';
      this.renderQuickButtons('consult');
      return;
    }

    if (this.step === 'consult') {
      this.fallbackCount++;
      if (this.fallbackCount === 1) {
        this.addBotMessage(this.m('clarify'));
        return;
      }
      if (this.fallbackCount === 2) {
        this.addBotMessage(this.m('humanSoft'));
        this.step = 'collect_contact';
        return;
      }
      this.addBotMessage(this.m('offerContact'));
      this.step = 'collect_contact';
      return;
    }

    this.fallbackCount++;
    this.addBotMessage(this.m('clarify'));
  }

  isLikelyName(text) {
    const t = text.trim();
    return t.length >= 2 && t.length <= 40 && !/\d{3}/.test(t) && !/@/.test(t);
  }

  capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  looksLikeContact(text) {
    return /@/.test(text) || /\+?\d{7,}/.test(text);
  }

  parseContact(text) {
    this.leadData.contact = text.trim();
    const email = text.match(/[\w.+-]+@[\w.-]+\.\w+/);
    const phone = text.match(/\+?\d[\d\s-]{6,}/);
    if (email) this.leadData.email = email[0];
    if (phone) this.leadData.phone = phone[0].replace(/\s/g, '');
    const namePart = text.split(/[,@+\d]/)[0].trim();
    if (namePart.length > 1 && !this.leadData.name) this.leadData.name = this.capitalize(namePart);
  }

  estimateRange(leads, team) {
    const leadSave = leads * 0.5 * 12 * 35 * 0.4;
    const teamSave = team * 48000 * 0.55;
    const base = leadSave + teamSave;
    const min = Math.round(base * 0.8 * 0.7);
    const max = Math.round(base * 4.2 * 1.15);
    const fmt = n => '€' + n.toLocaleString('de-DE');
    if (max < 50000) return `${fmt(min)} – ${fmt(max)}`;
    if (team >= 5 || leads >= 1500) return `${fmt(Math.round(base * 2.2 * 0.7))} – ${fmt(Math.round(base * 6.5 * 1.15))}`;
    return `${fmt(min)} – ${fmt(max)}`;
  }

  saveLead() {
    const record = {
      ...this.leadData,
      sessionId: this.sessionId,
      lang: currentLang,
      date: new Date().toISOString(),
      transcript: this.getTranscript()
    };
    const leads = JSON.parse(localStorage.getItem('gor-leads') || '[]');
    leads.push(record);
    localStorage.setItem('gor-leads', JSON.stringify(leads));
    try {
      localStorage.setItem('gor-pending-lead', JSON.stringify(record));
    } catch (_) { /* ignore */ }
  }

  async forwardLeadToTelegram() {
    const payload = {
      sessionId: this.sessionId,
      name: this.leadData.name,
      contact: this.leadData.contact,
      business: this.leadData.business,
      leads: this.leadData.leads,
      team: this.leadData.team,
      goal: this.leadData.goal,
      lang: currentLang,
      source: 'gor-landing-web',
      transcript: this.getTranscript()
    };

    try {
      const res = await fetch(TELEGRAM_LEAD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) return false;
      const data = await res.json();
      return data.ok === true;
    } catch {
      return false;
    }
  }

  completeLeadHandoff() {
    this.showTyping(() => {
      this.forwardLeadToTelegram().then(sent => {
        const key = sent ? 'thanks' : 'thanksFallback';
        const text = this.m(key)
          .replace('{name}', this.leadData.name || '')
          .replace('{session}', this.sessionId);
        const div = document.createElement('div');
        div.className = 'chat-msg chat-msg--bot';
        div.textContent = text;
        this.messagesEl.appendChild(div);
        this.scrollToBottom();
        this.step = 'done';
        this.renderQuickButtons('done');
      });
    });
  }

  /** Aynı Telegram botu — web oturumu ile bağlı /start parametresi (max 64 karakter) */
  openTelegram({ announce = true } = {}) {
    const start = `web_${this.sessionId}`.slice(0, 64);
    if (announce) {
      this.addBotMessage(
        this.m('telegramHandoff').replace('{session}', this.sessionId)
      );
    }
    window.open(`${TELEGRAM_BOT_URL}?start=${encodeURIComponent(start)}`, '_blank', 'noopener,noreferrer');
  }

  onLangChange() {
    const set = this.step === 'welcome' ? 'welcome' : this.step === 'done' ? 'done' : 'consult';
    this.renderQuickButtons(set);
  }
}

const salesAgent = new SalesAgent();
window.salesAgent = salesAgent;
