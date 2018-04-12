var express = require('express');
var router = express.Router();
var getTicket = require('../app/12306.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  // var ticket = new getTicket()
  // var rest = ticket.getTicket({ train_date: '2018-03-23', time: 2000, params:'G365'});
  res.render('index', { title: 'Express' });
  // res.send(rest.text);
});

module.exports = router;
