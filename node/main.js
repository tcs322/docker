const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.send("<h1>Node.js</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact.js</h1>");
});

app.listen(port);