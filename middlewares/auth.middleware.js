module.exports = (req, res, next) => {

    var jwt = require('jsonwebtoken');
    var db = require('../mock.db');

    if (typeof req.headers.authorization !== 'string') {
        res.status(400).send({
            message: 'Bad request'
        });
        return;
    }

    var token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, db.SECRET, (err, decoded) => {

        if (err) {
            return res.status(401).send({
               message: 'Auth failed' 
            });
        }
        next();
    });

}