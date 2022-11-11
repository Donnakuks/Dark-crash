import cheerio from  cheerio 
import fetch from  node-fetch 

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0]) throw `Ex: ${usedPrefix + command} https://www.facebook.com/profile.php?id=100048769897748`
	let res = await apkDl(args[0])
	await m.reply( ...داليش الروسي غادي يسيفط لڪ تطبيق )
	conn.sendMessage(m.chat, { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName }, { quoted: m })
}
handler.command = /^(apkdl)$/i
handler.help = [ apkdl ]
handler.tags = [ downloader ]
export default handler

async function apkDl(url) {
	let  res = await fetch( https://apk.support/gapi/index.php , {
		method:  post ,
		body: new URLSearchParams(Object.entries({ x:  downapk , t: 1, google_id: url, device_id:   , language:  en-US , dpi: 240, gl:  SUQ= , model:   , hl:  en , de_av:   , aav:   , android_ver: 11, tbi:  armeabi-v7a , country: 0, gc: undefined}))
	})
let $ = cheerio.load(await res.text())
  let fileName = $( div.ssg > div.bdlinks > a > span ).text().trim().split(   )[0].replace(/⚡/,  ).match(/(.*)apk(.\d*)/)[1] +  apk 
	let download = $( div.ssg > div.bdlinks > a ).attr( href )
  if (!download) throw  Can\ t download the apk! 
  let mimetype = (await fetch(download, { method:  head  })).headers.get( content-type )
  return { fileName, mimetype, download }
}
