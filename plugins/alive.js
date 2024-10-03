const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname} I'm alive now*

*╭─「 ALIVE 」
*│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* ${runtime(process.uptime())}
*│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* 66.24MB / 126777MB
*╰──────────●●►*
*╭──────────●●►*
*│ 𝚄𝙿𝙳𝙰𝚃𝙴 𝙲𝙷𝙰𝙽𝙿𝙾𝙽𝙴𝙻:* https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A
*│
*│ 𝙶𝙸𝚃𝙷𝚄𝙱:* https://github.com/project-wabot/DARK-NETHU-MD
*╰──────────●●►*

*Tipe .menu to get bot user menu*

> ᴘᴏᴠᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ
`
return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/48p60j.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
