const {
	Function,
	parsedJid,
	getBuffer
} = require("../lib/");

const url1 = 'https://i.imgur.com/0I0KONy.jpeg'
const url2 = 'https://i.imgur.com/kxwRM1c.jpg'

Function({
	pattern: 'mforward ?(.*)',
	fromMe: true,
	type: 'misc'
}, async (m, text, client) => {
	if (!m.reply_message) return await m.reply('*Reply to a message*')
	if (!text) return await m.reply('_Give me a jid_\n*Example .mforward jid1 jid2 jid3 jid4 ...*')
	const image1 = await getBuffer(url1)
	const image2 = await getBuffer(url2)
	const options = {}
	options.contextInfo = {
		forwardingScore: 5, // change it to 999 for many times forwarded
		isForwarded: false,
	}

	options.linkPreview = {
		title: '𝛨𝛯𝑅𝛭𝛪𝑇',
		body: '𝐌𝐚𝐝𝐞 𝐛𝐲 𝐡𝐞𝐫𝐦𝐢𝐭 𝐰𝐢𝐭𝐡 💜',
		mediaType: 2,
		thumbnail: image2,
		mediaUrl: '', // insta link for video 
		sourceUrl: 'https://github.com/A-d-i-t-h-y-a-n',
		showAdAttribution: true
	}

        options.filesize = 9999999999999;

	options.quoted = {
		key: {
			fromMe: false,
			participant: '0@s.whatsapp.net',
			remoteJid: 'status@broadcast',
		},
		message: {
			imageMessage: {
				jpegThumbnail: image2,
				caption: '𝐌𝐚𝐝𝐞 𝐛𝐲 𝐚𝐝𝐢𝐭𝐡𝐲𝐚𝐧 𝐰𝐢𝐭𝐡 💜',
			},
		},
	}

	if (/audio/.test(m.mine)) {
		options.duration = 2000001355
		options.ptt = true // delete this if not need audio as voice always
	}

	for (let jid of parsedJid(text)) {
		await client.forwardMessage(jid, m.quoted_message, options)
	}
});