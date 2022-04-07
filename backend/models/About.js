const mongoose = require('mongoose')
const { Schema } = mongoose;

const About = new Schema({
    name: String,
    dob: String,
    about: String,
    address: String,
    phone: String,
})
module.exports = mongoose.model('about', About);