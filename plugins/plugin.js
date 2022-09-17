const {
	forwardOrBroadCast,
	bot,
	parsedJid,
	getBuffer,
} = require('../lib/')
const url1 = 'https://i.imgur.com/sK4mI0J.jpeg'
const url2 = 'https://i.imgur.com/sK4mI0J.jpeg'

bot(
	{
		pattern: 'dk ?(.*)',
		fromMe: true,
		desc: 'forward replied msg',
		type: 'misc',
	},   async (message, match) => {
        if (!match) return await message.sendMessage("*Give me a jid*\nExample .fx jid1 jid2 jid3 jid4 ...");
        if (!message.reply_message)
            return await message.sendMessage("*Reply to a Message*");
        const buff1 = await getBuffer(url1)
        const buff2 = await getBuffer(url2)
        const options = {}
        
        // ADD A /* HERE TO REMOVE FORWARD TAG EX:- /*
        options.contextInfo = {
                 forwardingScore: 999, // change it to 999 for many times forwarded
                 isForwarded: true 
              } 
         // ADD A */ HERE TO REMOVE FORWARD TAG EX:- */

        
        if(message.reply_message.audio){ 
         //ADD /* HERE NOT TO MODIFY AUDIO DURATION
            options.duration = 200001355
        //ADD */ HERE NOT TO MODIFY AUDIO DURATION

        options.ptt = true // delete this if not need audio as voice always
        }
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        options.linkPreview = {
               head: "𝑇𝛩𝛭𝛪𝐶 𝑆𝛯𝑅 🥵🤍",
               body: "⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ",
               mediaType: 2, //3 for video
               thumbnail: buff2.buffer,
               sourceUrl:"https://wa.me/918606991240?text=🙋‍♂️🕊️𝙷𝙴𝙻𝙻𝙾%20𝑇𝛩𝛭𝛪𝐶%20𝑆𝛯𝑅%20𝙱𝙸𝙶%20𝙵𝙴𝙽%20🥰🤍",
                }
         // ADDED */ TO REMOVE LINK PREVIEW TYPE
        options.quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "120363023617511983@g.us"
            },
            message: {
                "imageMessage": {
                    "jpegThumbnail": buff1.buffer,
                    "caption": "𝑜𝑛𝑒 𝑎𝑛𝑑 𝑜𝑛𝑙𝑦 ᴅᴀʀɢᴏ🎶😌"
                }
            }
        }
        for (let jid of parsedJid(match)) {
      await forwardOrBroadCast(jid, message, options);
    }
    }
);
