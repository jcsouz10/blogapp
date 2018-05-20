const express = require('express');
const router = express.Router();


router.get('/comentarios/:postid', (req, res)=>{
    res.json({
        content: 'Hello',
        author: 'Jean'
    })
})

module.exports = router;