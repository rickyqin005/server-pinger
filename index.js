require('dotenv').config();
const axios = require('axios');

// ping every 10 minutes
setInterval(async () => {
    await axios.get(process.env.SERVER_URL);
    console.log(`pinged ${process.env.SERVER_URL}`);
}, 600000);
