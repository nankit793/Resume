const mongoose = require('mongoose')
const { Schema } = mongoose;

const Hire = new Schema({
    name: String,
    email: String, 
    message: String
})
module.exports = mongoose.model('hire', Hire);