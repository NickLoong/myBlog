var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  console.log(req)
  console.log(res)
  res.send('req');
});

module.exports = router;
