var express = require('express');
var router = express.Router();

/* GET users listing. */
router.delete('/', function(req, res, next) {
  res.send('respond with a erase');
});

module.exports = router;
