const express = require('express');
const path = require('path')
const mongoose  = require('mongoose');
const Setup = require('./models/setup')

mongoose.connect('mongodb://localhost:27017/dreamy-desks', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once("open", () => {
    console.log("Database Connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/makesetup/', async (req, res) => {
    res.send("hi")
})

app.listen(3000, () => {
    console.log("DreamyDesks is live and listening on 3000");
})

