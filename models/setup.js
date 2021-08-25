const mongoose = require('mongoose')
const Schema = mongoose.Schema

const setupSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    publishedDate: { 
        type : Date, 
        default: Date.now
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
    }
})

const Setup = mongoose.model('Setup', setupSchema)

module.exports = Setup;

