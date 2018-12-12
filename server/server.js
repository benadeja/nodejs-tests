const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/names', (req, res) => {
    res.status(200).send([{
        name: 'Jaco',
        age: 35
    }, {
        name: 'Carle',
        age: 30
    },
    {
        name: 'Heino',
        age: 35
    }]);
});

app.listen(3000);
module.exports.app = app;