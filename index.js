require('dotenv').config();
const axios = require('axios');
const express = require('express');

// ping every minute
setInterval(async () => {
    try {
        await axios.get(process.env.SERVER_URL);
        console.log(`pinged ${process.env.SERVER_URL}`);
    } catch(error) {
        console.log(`${error.response.status} ${error.response.statusText} ${error.config.url} : ${error.message}`);
    }
}, process.env.PING_INTERVAL);

const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
app.get('/api/check', (req, res) => {
    console.log(`GET ${req.path}`);
    res.send('Hello');
});
