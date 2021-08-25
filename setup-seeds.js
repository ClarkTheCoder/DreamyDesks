const mongoose = require('mongoose')
const Setup = require('./models/setup')

mongoose.connect('mongodb://localhost:27017/dreamy-desks', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection Successful!")
}).catch(e => console.log(e))

const seedInfo = [
    {
        title: 'Beastly PC gaming setup',
        description: 'My beast ass gaming pc setup',
        category: 'gaming'
    },
    {
        title: 'Mac Setup for Work',
        description: 'This is my clean minimal Mac setup for my work as a designer',
        category: 'apple'
    },
    {
        title: 'This is my chill station',
        description: 'This is where I watch porn and anime',
        category: 'leisure'
    },
    {
        title: 'Lenovo Land',
        description: 'This is my user upgraded Lenovo which I use for programming!',
        category: 'programming'
    },
    {
        title: 'iPad Paradise',
        description: 'This is where I relax with my iPad every day',
        category: 'apple'
    },
    {
        title: 'Mac Mini setup',
        description: 'My setup which features a new Mac Mini m1x!',
        category: 'apple'
    },
]

Setup.insertMany(seedInfo)
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })