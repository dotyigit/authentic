module.exports = app => {

    var userController = require('../controllers/user.controller');
    
    var router = require('express').Router();

    router.post('/login', userController.login);

    app.use('/api/user', router);

}