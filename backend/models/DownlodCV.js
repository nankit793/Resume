const mongoose = require('mongoose')
const { Schema } = mongoose;

const DownlodCV = new Schema({
    link:  String
})
module.exports = mongoose.model('downlaodcv', DownlodCV);