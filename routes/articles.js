//set up express server again
const express = require('express')
const router = express.Router()

router.get('/',(req, res)=> {
    res.send('At articles')
})  

//instructing the application to use this router written here
 module.exports = router;