
const express = require('express')
const router = express.Router()
const Projects = require('../models/Projetcs')

router.get('/', async (req, res)=>{
    try {
        const project = await Projects.find({projectid: "62487de294ad1f6154a18069.projectId"})
        res.send(project)
    } 
    catch (error) {
        res.status(400).send('Internal Server Error')
    }
})

router.post('/add', async (req , res)=>{
    try {
        const project = new Projects(req.body)
        project.save()
        res.send(project)
        
    } catch (error) {
        res.status(400).send('Internal Server Error')
    }
})

router.put('/update/:id', async (req, res)=>{
    try {
         const newproject = await Projects.findByIdAndUpdate(req.params.id, req.body)
         res.send(req.body)
    } catch (error) {
        res.status(400).send('The Project Was Not Found')
    }
})
router.delete('/delete/:id', async (req, res)=>{
    try {
         const newproject = await Projects.findByIdAndRemove(req.params.id)
         res.send('Note has been deleted')
    } catch (error) {
        res.status(400).send('The Project Was Not Found')
    }
})

module.exports = router

