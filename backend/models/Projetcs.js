const mongoose = require('mongoose')
const { Schema } = mongoose;

const Projects = new Schema({
    name: String,
    description: String,
    link: String,
    projectid: String
})
module.exports = mongoose.model('projects', Projects);