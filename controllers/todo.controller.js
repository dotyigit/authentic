var db = require('../mock.db');

exports.get = (req, res) => {

    var todo = db.todo;
    
    return res.status(200).send(todo);

}