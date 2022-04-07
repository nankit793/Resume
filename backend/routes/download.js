
const express = require('express')
const router = express.Router()
const Download = require('../models/DownlodCV')

router.get('/', async (req, res)=>{
    try {
       const download = await Download.findById('624339ebd9da5f733565ec03')
       res.json(download)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }

    //Add data in download
    
})
// router.post('/add', (req, res)=>{
//         try {
//             const download =  Download(req.body)
//             download.save()
//             res.json(download)
            
//         } catch (error) {
//             res.status(500).send('Internal Server Error')
//         }
//     })
//update the download 
router.put('/update',async (req, res)=>{
    const updater = await Download.findByIdAndUpdate('624339ebd9da5f733565ec03', req.body)
    res.send(updater)
})

module.exports = router



