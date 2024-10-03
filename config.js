const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "fOJHBZCT#MS3JGKhxP9v98YjD0tozNLInJf9wrhSY6NWF0byYHQI",
ALIVE_IMG : process.env.ALIVE_IMG || "https://iili.io/dLpAgr7.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*Hello I am alive now*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
