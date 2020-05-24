var db = require('../mock.db');
var jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
        return res.status(404).send({
            message: 'Email or password not provided'
        });
    }
    
    var username = req.body.username;
    var password = req.body.password;

    if (username == db.USERNAME & password == db.PASSWORD) {
        
        var token = jwt.sign({
            username
        }, db.SECRET);

        return res.status(200).send({
            message: 'success',
            token: token
        })
    } else {
        return res.status(404).send({
            message: 'Wrong credentials'
        });
    }




}