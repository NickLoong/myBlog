let fs = require('fs');
let path = require('path');
let userController = function () {
    this.userSeries = null;
}
//获取登陆页面
userController.prototype.getLoginPage = function (req,res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../../dist/login.html'), 'utf-8');
    res.send(html)
}
//登陆 post
userController.prototype.login = function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf-8');
    let username = req.body.username;
    let password = req.body.password;
    if(password === '123456789'){
        res.send(html);
        // res.render('index', { title: 'Express' });
    }else{
        res.send({
            msg:'密码或帐户名错误'
        })
    }
}
module.exports = new userController();