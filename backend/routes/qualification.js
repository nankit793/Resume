
const express = require('express')
const router = express.Router()
const Qualify = require('../models/Qualifications')

router.get('/', async (req, res)=>{
    const qualify = await Qualify.find({qualifyid: "62487de294ad1f6154a18069.projectId" })
    res.send(qualify)
})

router.post('/add', async (req, res)=>{
   try {
       const qualify = await Qualify(req.body)
       qualify.save()
       res.send(req.body)
       
   } catch (error) {
       res.status(400).send('Internal Server Erorr')
   }
})

router.put('/update/:id',async (req, res)=>{
    try {
        const updater = await Qualify.findByIdAndUpdate(req.params.id, req.body)
        res.send(updater)
    } catch (error) {
    res.status(400).send("Internal Server Error")        
    }
})

router.delete('/delete/:id', async (req, res)=>{
    try {
        const updater = await Qualify.findByIdAndRemove(req.params.id, req.body)
        res.send(updater)
    } catch (error) {
    res.status(400).send("Internal Server Error")        
    }
})
module.exports = router

