const path = require('path');
const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
 // res.send('Secure Express server with Cloudflare Origin Cert');
 res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const server = https.createServer({
  key: fs.readFileSync('origin.key'),
  cert: fs.readFileSync('origin.crt')
}, app);

server.listen(8001, () => {
  console.log('HTTPS server running on https://localhost:8001');
});