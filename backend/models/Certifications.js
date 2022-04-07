const mongoose = require('mongoose')
const { Schema } = mongoose;

const Certifications = new Schema({
    name: String,
    description: String,
    img:
    {
        data: Buffer,
        contentType: String
    }

})
module.exports = mongoose.model('certifications', Certifications);