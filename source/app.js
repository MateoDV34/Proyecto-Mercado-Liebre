const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT  || 2020;

app.listen(port, () => console.log('Abriendo el servidor'+port));

const public = path.resolve(__dirname, '../public');

app.use(express.static(public));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views/home.html')))
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, 'views/register.html')))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, 'views/login.html')))
