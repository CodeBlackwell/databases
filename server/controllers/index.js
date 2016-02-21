var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js');


module.exports = {

  messages: {

    get: function (req, res) {

    },

    post: function (req, res) {
      console.log("POSTED message data:", req.body );
      // username: "Valjean",
      // message: "In mercy's name, three days is all I need.",
      // roomname: "Hello"
      /*
      db.connection.query(
        "INSERT INTO rooms (name) VALUES ('" + req.body.roomname + "')"
      );
      */
    }
  },

  users: {
    
    get: function( req, res ) {

    },

    post: function( req, res ) {

      // DOUBLE quote query string, enclosing nested string values in SINGLE quotes!

      var exists = db.connection.query(
        "SELECT id FROM users WHERE name = " + req.body.username + "')"
      );

      if( !exists ) {
        db.connection.query(
          "INSERT INTO users (name) VALUES ('" + req.body.username + "')"
        );
      }
    }
  }
};

