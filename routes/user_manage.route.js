const express = require('express');
const router = express.Router();

router.get('/', function(req,res,next){
    res.render('user_manage');
})

module.exports = router;