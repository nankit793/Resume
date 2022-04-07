const express = require('express')
const router = express.Router()
const Certification = require('../models/Certifications')

router.get('/', async (req, res)=>{
    const certification = await Certification.find({qualifyid: "62487de294ad1f6154a18069.projectId" })
    res.send(certification)
})

router.post('/add', async (req, res)=>{
    try {
        const projectid = "62487de294ad1f6154a18069.projectId"
        req.body.insert = projectid
        console.log(req.body)
        const certification = await Certification(req.body)
        certification.save()
        res.send(req.body)
        
    } catch (error) {
        res.status(400).send('Internal Server Erorr')
    }
 })