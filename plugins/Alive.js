ain.js
+44
-278
Original file line number	Diff line number	Diff line change
@@ -1,278 +1,44 @@
const config = require('../config')
const os = require('os')
const {
    cmd,
    commands
} = require('../command')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
cmd({
        pattern: "alive",
        react: "💭",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "other",
        use: '.alive',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `${monspace}👋 Hello ${pushname} I'm alive now${monspace}
*👨‍💻 Im SHADOW-MD whatsapp bot 👨‍💻*
╭────────●●►   
> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}
╰────────────────────●●►   
*🚀 WELCOM TO SHADOW MD 🚀*
*❯ Welcome Shado md whats app bot you can download video songs and various videos through this bot. Shado md owner is Lakshan Damayantha.. It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This technology is also related to AI.*
`
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Get Menu",
                        id: ".menu"
                    }),
                }
            ]
            let opts = {
                image: `https://i.imgur.com/Mkp0Z9o.jpeg`,
                header: '',
                footer: config.FOOTER,
                body: sssf
            }
         
	await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Shadowteach/shadow-raw/raw/refs/heads/main/BUTTON%20ALIVE.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
	
	return await conn.sendButtonMessage(from, buttons, m, opts)	
	await conn.sendMessage(from, {
text: commandList,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363316527550485@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: 'ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029Vajn0gb8F2pFh7PDqO0c" ,
thumbnailUrl: `https://i.imgur.com/2p7gHUD.jpeg` ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
