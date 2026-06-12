document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initChat();
  initROI();
  initMobileMenu();
  initHeaderScroll();
});

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('gor-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  toggle?.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('gor-theme', next);
  });
}

function initLanguage() {
  setLanguage(currentLang);

  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = langMenu.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', open);
  });

  langMenu?.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      setLanguage(li.dataset.lang);
      langMenu.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', () => {
    langMenu?.classList.remove('open');
    langBtn?.setAttribute('aria-expanded', 'false');
  });

  window.onLanguageChange = (lang) => {
    salesAgent.onLangChange();
  };

  document.querySelectorAll('[data-i18n-pdf]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const href = el.getAttribute('href');
      if (href) prefetchPresentation(href);
    }, { passive: true });
  });
}

function initChat() {
  const widget = document.getElementById('chatWidget');
  const toggle = document.getElementById('chatToggle');
  const panel = document.getElementById('chatPanel');
  const messages = document.getElementById('chatMessages');
  const quick = document.getElementById('chatQuick');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const telegramBtn = document.getElementById('chatTelegram');

  let chatOpened = false;

  function openChat() {
    widget.classList.add('open');
    if (!chatOpened) {
      chatOpened = true;
      salesAgent.init(messages, quick, input);
    }
  }

  function closeChat() {
    widget.classList.remove('open');
  }

  toggle?.addEventListener('click', () => {
    widget.classList.contains('open') ? closeChat() : openChat();
  });

  document.querySelectorAll('[data-open-chat]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openChat();
      input?.focus();
    });
  });

  document.getElementById('openChatHeader')?.addEventListener('click', openChat);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    salesAgent.addUserMessage(text);
    input.value = '';
    salesAgent.processMessage(text);
  });

  telegramBtn?.addEventListener('click', () => salesAgent.openTelegram());
}

function initROI() {
  const leadsInput = document.getElementById('roiLeads');
  const teamInput = document.getElementById('roiTeam');
  const costInput = document.getElementById('roiCost');
  const scaleInput = document.getElementById('roiScale');
  const leadsVal = document.getElementById('roiLeadsVal');
  const teamVal = document.getElementById('roiTeamVal');
  const costVal = document.getElementById('roiCostVal');
  const scaleVal = document.getElementById('roiScaleVal');
  const result = document.getElementById('roiResult');

  const SCALE_LABELS = {
    tr: ['Küçük İşletme', 'Orta Ölçek', 'Kurumsal / Dijital Ekip'],
    en: ['Small Business', 'Mid-Scale', 'Enterprise / Digital Team'],
    es: ['Pequeña Empresa', 'Escala Media', 'Corporativo / Equipo Digital'],
    ru: ['Малый Бизнес', 'Средний Масштаб', 'Корпоратив / Цифровая Команда'],
    hy: ['Փոքր Բիզնես', 'Միջին Մասշտաբ', 'Կորպորատիվ / Թվային Թիմ']
  };

  const SCALE_FACTORS = {
    1: { min: 0.8, max: 1.8 },
    2: { min: 1.5, max: 4.2 },
    3: { min: 2.2, max: 6.5 }
  };

  function formatEuro(n) {
    return '€' + Math.round(n).toLocaleString('de-DE');
  }

  function calc() {
    const leads = parseInt(leadsInput.value, 10);
    const team = parseInt(teamInput.value, 10);
    const cost = parseInt(costInput.value, 10);
    const scale = parseInt(scaleInput.value, 10);
    const lang = document.documentElement.lang || 'tr';
    const labels = SCALE_LABELS[lang] || SCALE_LABELS.tr;

    leadsVal.textContent = leads.toLocaleString('de-DE');
    teamVal.textContent = team;
    costVal.textContent = cost;
    scaleVal.textContent = labels[scale - 1];

    const leadSavings = leads * 0.5 * 12 * cost * 0.4;
    const teamSavings = team * 48000 * 0.55;
    const base = leadSavings + teamSavings;
    const factors = SCALE_FACTORS[scale];
    const minSave = base * factors.min * 0.7;
    const maxSave = base * factors.max * 1.15;

    result.textContent = `${formatEuro(minSave)} – ${formatEuro(maxSave)}`;
  }

  leadsInput?.addEventListener('input', calc);
  teamInput?.addEventListener('input', calc);
  costInput?.addEventListener('input', calc);
  scaleInput?.addEventListener('input', calc);
  document.addEventListener('languageChanged', calc);
  calc();
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.nav');
  btn?.addEventListener('click', () => nav?.classList.toggle('mobile-open'));
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}
