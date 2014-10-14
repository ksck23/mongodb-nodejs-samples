/*
 * helpers/db.js
 * This helper is a singleton implementation of the mongo db connection.
 * We could use this across different models. It is based on the mongoose driver
 */

var mongoose = require('mongoose');
var dbConn;

if (dbConn) {
    module.exports = dbConn;
} else {
    mongoose.connect('mongodb://localhost/test');

    mongoose.connection.on('error', function (err) {
        console.log('dbConn creation failed with some error:', err);
        module.exports = null;
    });

    dbConn         = mongoose;
    module.exports = mongoose;
}