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
const route = require('./routes/routes.js');

// deifne path for route
app.use('/api', route);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/events', { useNewUrlParser: true });
//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongodb successfully');
})
mongoose.connection.on('error', (err)=> {
    if(err) {
        console.log('Error connection' + err); 
    }
})

//testing routes
app.get('/', function (req, res) {
    res.send('hello world')
  })

app.listen(port, function() {
    console.log('Server listening to port :' + port);
});