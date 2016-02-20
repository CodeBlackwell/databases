var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js');


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //use a connection to the database using db.connection
      db.connection.query('INSERT INTO users (name) VALUES (hello)');
      //write to the database
      console.log("this is the data:", req.body );
    }
  }
};

