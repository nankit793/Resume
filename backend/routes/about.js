const express = require('express');
const About = require('../models/About')
const router = express.Router();    

// show all the data in /about :GET
router.get('/', async (req, res)=>{
    try {
       const about = await About.findById('6241f3a5e3cf76b05f786e90')
       res.json(about)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
//Add data in about
})
//update the about 
router.put('/update',async (req, res)=>{
    const updater = await About.findByIdAndUpdate('6241f3a5e3cf76b05f786e90', req.body)
    res.send(req.body)
})

// router.post('/add', (req, res)=>{
//     try {
//         const about =  About(req.body)
//         about.save()
//         res.json(about)
        
//     } catch (error) {
//         res.status(500).send('Internal Server Error')
//     }
// })

module.exports = router

