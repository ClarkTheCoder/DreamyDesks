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

module.exports = mongoose.model('Setup', setupSchema)