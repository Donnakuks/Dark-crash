const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'status ?(.*)', fromMe: isPublic, desc: 'random malayalam status videos', type: 'random'}, async (m, text, client) => {
let { result} = await getJson ('https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Sts.json')
let mask = result[Math.floor(Math.random()*result.length)]
const buttons = [
  {buttonId: prefix + 'status', buttonText: {displayText: 'next'}, type: 1}]

const buttonMessage = {
    video: {url: mask},
    caption: "*Random Malayalam Status*",
    footer: 'Hermit-md',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});