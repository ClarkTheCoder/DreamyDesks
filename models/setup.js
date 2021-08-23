const mongoose = require('mongoose')
const Schema = mongoose.Schema

const setupSchema = new Schema({
    title: String, 

    publishedDate: { 
        type : Date, 
        default: Date.now
    },

    description: String, 

    catagory: {
        type: String,
        enum: ['work', 'gaming', 'leisure', 'apple', 'programming']
    }
})

const Setup = mongoose.model('Setup', setupSchema)

module.exports = Setup;

