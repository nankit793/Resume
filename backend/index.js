
const express = require('express')
const app = express()
const port = 3000
const connectToMongo = require('./db')
connectToMongo();

app.use(express.json())
app.use('/about', require('./routes/about.js'))
app.use('/download', require('./routes/download'))
app.use('/hire', require('./routes/hire'))
app.use('/projects', require('./routes/projects'))
app.use('/qualification', require('./routes/qualification'))
// app.use('/certifications', require('./routes/certifications'))

app.use('/', (req, res)=>
{
    res.send('Hi There')
})



app.listen(port, (req, res)=>{console.log('connected')})