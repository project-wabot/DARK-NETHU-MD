const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uKoinIJR#dF4KuBLZz5p-BedwOYb_Z8t3Pe50uUwYU6YMrg-RxC0",
ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/dbFAKoG.jpg",

BOT_NUMBER: process.env.BOT_NUMBER || "94704227534",
};
