# @Gor_OffLife_kartvisit_bot — web oturumu handoff örneği
# Kullanıcı web'den gelince: /start web_a1b2c3d4
# python-telegram-bot veya aiogram ile start handler'a ekleyin.

"""
async def start(update, context):
    arg = context.args[0] if context.args else ''
    if arg.startswith('web_'):
        session = arg.replace('web_', '', 1)
        await update.message.reply_text(
            f'Merhaba! Web sitemizdeki görüşmenize bağlandınız (oturum: {session}).\n'
            'Gor ekibi lead bilginizi aldı. Buradan sorularınıza devam edebilirsiniz.'
        )
        return
    # ... mevcut kartvizit / karşılama akışınız
"""
