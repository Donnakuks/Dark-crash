const { Function } = require('../lib')

Function({pattern: 'vv ?(.*)', fromMe: true, desc: 'antiViewOnce', type: 'whatsapp'}, async (message, match) => {
if (!message.reply_message) return await message.send('_Reply to a viewOnce image or video_')
if (!message.reply_message.mtype == 'viewOnceMessage') return await message.send('_Reply to a viewOnce image or video_')
await message.client.forwardMessage(message.jid, message.quoted_message, { viewOnce: false })
})