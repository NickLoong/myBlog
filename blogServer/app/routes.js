let fs = require('fs');
let path = require('path');
let express = require('express');
let router = express.Router();
let userController = require('./controller/userController');
// let userRoute = new userController();
router.get('/login', userController.getLoginPage);
router.post('/index', userController.login);
module.exports = router;