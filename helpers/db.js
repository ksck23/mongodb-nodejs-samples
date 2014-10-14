var mongoose = require('mongoose');
var dbConn;

if (dbConn) {
    module.exports = dbConn;
} else {
    mongoose.connect('mongodb://localhost/test');

    dbConn         = mongoose;
    module.exports = mongoose;
    // var db = mongoose.connection;

    // db.on('error', function (err) {
    //     console.log('dbConn creation failed with some error:', err);
    //     module.exports = null;
    // });

    // db.once('open', function () {
    //     console.log('dbConn creation successful', dbConn);
    //     dbConn = mongoose;
    //     module.exports = mongoose;
    // });
}