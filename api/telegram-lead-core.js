function escapeHtml(s) {
  return String(s ?? '—')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatLead(body) {
  const lines = [
    '🆕 <b>Web Satış Lead</b> → @Gor_OffLife_kartvisit_bot',
    '',
    `🆔 Oturum: <code>${escapeHtml(body.sessionId)}</code>`,
    `👤 Ad: ${escapeHtml(body.name)}`,
    `📞 İletişim: ${escapeHtml(body.contact)}`,
    `🏢 İşletme: ${escapeHtml(body.business)}`,
    `📊 Talep/ay: ${escapeHtml(String(body.leads || '—'))}`,
    `👥 Ekip: ${escapeHtml(String(body.team ?? '—'))}`,
    `🎯 Hedef: ${escapeHtml(body.goal)}`,
    `🌐 Dil: ${escapeHtml((body.lang || 'tr').toUpperCase())}`,
    `🔗 Kaynak: ${escapeHtml(body.source || 'web')}`
  ];

  if (body.transcript) {
    lines.push('', '<b>💬 Sohbet özeti:</b>', escapeHtml(body.transcript.slice(0, 1200)));
  }

  lines.push('', `↩️ Kullanıcı aynı botta devam edebilir: /start web_${body.sessionId}`);

  return lines.join('\n');
}

async function sendTelegram(token, chatId, text) {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    })
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.description || 'telegram_error');
  return data;
}

async function handleTelegramLead(body, env) {
  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_ADMIN_CHAT_ID;

  if (!token || !chatId) {
    return { status: 503, body: { ok: false, error: 'not_configured' } };
  }

  if (!body || !body.sessionId) {
    return { status: 400, body: { ok: false, error: 'invalid_payload' } };
  }

  const text = formatLead(body);
  await sendTelegram(token, chatId, text);
  return { status: 200, body: { ok: true, bot: 'Gor_OffLife_kartvisit_bot' } };
}

module.exports = { handleTelegramLead, formatLead };
