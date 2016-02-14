/*eslint-env node */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/getAns', function(req, res, next) {
    var list = "hello world";
    res.send(list);
});

router.post('/submitAns', function(req, res, next){
	var list = "derp",
	res.send(200);
})

module.exports = router;