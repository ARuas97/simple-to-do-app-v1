let data = [ { item: 'Feed the dog'}, { item: 'Learn node.js'}, { item: 'Go shopping'} ];

const bodyParser = require('body-parser');
const { rmSync } = require('fs');
const urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = (app) => {
  
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data});

    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);

    });

    app.delete('/todo/:item', (req, res) => {
        data = data.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item);
        res.json(data);

    });

};