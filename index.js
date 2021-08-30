const express = require('express');
const path = require('path')
const mongoose  = require('mongoose');
const Setup = require('./models/setup')
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')

// connect to DB
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

// set template engine 
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// send delete/put requests via form
app.use(methodOverride('_method'))

// parse request body
app.use(express.urlencoded({ extended: true }))

// home
app.get('/', (req, res) => {
    res.render('home');
})

// display all setups
app.get('/setups', async (req, res) => {
    const setups = await Setup.find({});
    res.render('setups/index', { setups });
})

// form for creating new setup post
app.get('/setups/new', (req, res) => {
    res.render('setups/new');
})

// route to process new setup request
app.post('/setups', async (req, res) => {
    const setup = new Setup(req.body.setup);
    await setup.save();
    res.redirect(`/setups/${setup._id}`);
})

// details page for setup 
app.get('/setups/:id', async (req, res) => {
    const setup = await Setup.findById(req.params.id);
    res.render('setups/details', { setup });
})

// form to update setup
app.get('/setups/:id/edit', async (req, res) => {
    const setup = await Setup.findById(req.params.id);
    res.render('setups/edit', { setup });
})

// route that processes updates
app.put('/setups/:id', async (req, res) => {
    const { id } = req.params;
    const setup = await Setup.findByIdAndUpdate(id, {...req.body.setup});
    res.redirect(`/setups/${setup._id}`);
})

// delete setup 
app.delete('/setups/:id', async (req, res) => {
    const { id } = req.params;
    const setup = await Setup.findByIdAndDelete(id);
    res.redirect('/setups')
})

app.listen(3000, () => {
    console.log("Dreamy Desks is live and listening on 3000");
})

