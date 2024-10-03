const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "fOJHBZCT#MS3JGKhxP9v98YjD0tozNLInJf9wrhSY6NWF0byYHQI",
MONGODB: process.env.MONGODB|| "",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
