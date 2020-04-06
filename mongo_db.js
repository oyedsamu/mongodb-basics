var mongo = require('MongoDB')

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/oyedsamu";

mongoClient.connect(url, function (err, db) {

    if (err) throw err;

    console.log("Database created by oyedsamu");

    db.close();

});