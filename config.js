const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "put session id",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/tCkmbMx/IMG-20240913-WA0041.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃𝐐𝐔𝐄𝐄𝐍-𝐊𝐘𝐋𝐈𝐄-𝐌𝐃 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐒𝐀𝐇𝐀𝐒 𝐓𝐄𝐂𝐇``| 2024🤍*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
