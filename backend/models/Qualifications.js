const mongoose = require('mongoose')
const { Schema } = mongoose;


const Qualification = new Schema({
    title: String,
    qualification: String,
    qualifyid: String
})

module.exports = mongoose.model('qualification', Qualification);