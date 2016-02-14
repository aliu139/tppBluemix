/*eslint-env node */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var list = "hello world";
    res.send(list);
});

module.exports = router;