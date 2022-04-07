
const express = require('express')
const router = express.Router()
const Hire = require('../models/Hire')

router.post('/', async (req, res)=>{
    try {
        const hire =  Hire(req.body)
        hire.save()
        res.json(hire)
        
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
//Add data in download    
})

module.exports = router





