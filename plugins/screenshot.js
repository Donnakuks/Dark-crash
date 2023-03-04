const {Function,isPublic,getUrl} = require("../lib/");
Function({pattern: 'ss ?(.*)', fromMe: isPublic, desc: 'Take website screenshot', type: 'download'}, async (message, match) => {
match = getUrl(match || message.reply_message.text)
if (!match) return await message.send('_Need a Url_\n*Example : ss https://h-e-r-m-i-t-web.herokuapp.com/deployment*')
await message.client.sendFromUrl(message.jid, `https://image.thum.io/get/fullpage/${match}`)
})
Function({pattern: 'fullss ?(.*)', fromMe: isPublic, desc: 'Take website Full screenshot', type: 'download'}, async (message, match) => {
match = getUrl(match || message.reply_message.text)
if (!match) return await message.send('_Need a Url_\n*Example : fullss https://h-e-r-m-i-t-web.herokuapp.com/deployment*')
await message.client.sendFromUrl(message.jid, `https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=${match}`)
})
