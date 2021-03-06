var express = require('express');
var db = require('./db/index.js');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

db.connection.connect( function(err) {
  if(err) {
    console.log("error trying to connect to database");
    throw err;
  }
  console.log('You are now connected to database...')
});

if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}



