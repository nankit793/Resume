const mongoose = require('mongoose');
const connect = 'mongodb://localhost:27017/Resume?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

const connectToMongo = ()=>{
    mongoose.connect(connect, ()=>{console.log('Connection Eshtablished Successfully 💖')})
}
module.exports = connectToMongo;