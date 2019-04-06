var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');

var app = express();

//port 
const port = 3000;

//adding middleware = cors
app.use(bodyparser.json());

// define routes
const route = require('../routes/routes.js');

// deifne path for route
app.use('/api', route);

route.get('/', (req, res) => {
    res.send("add some kind of home page")
});


app.listen(port, function() {
    console.log('Server listening to port :' + port);
});