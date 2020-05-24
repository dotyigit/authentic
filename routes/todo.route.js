module.exports = app => {

    var todoController = require('../controllers/todo.controller');
    
    var router = require('express').Router();

    var restrictAuth = require('../middlewares/auth.middleware');

    router.get('/get', restrictAuth, todoController.get);

    app.use('/api/todo', router);

}