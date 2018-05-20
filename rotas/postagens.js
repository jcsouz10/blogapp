const express = require('express');
const router = express.Router();

router.get('/postagens', (req,res)=>{
    res.json({
        title: 'Hello',
        post: 'Welcome to my server with Node.js',
        author: 'Jean'
    })
})

module.exports = router;