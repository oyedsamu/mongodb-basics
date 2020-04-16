fs = require('fs');
fs.writeFile("findinterns.js", "test data", function(err, data){
    if(err){
        console.log("There was an error creating the file")
    } else {
        console.log("findInterns.js created as a new file");
    }
})

fs.writeFile("updateInterns.js", "test data 2", function (err, data) {
    if (err) {
        console.log("There was an error creating the file")
    } else {
        console.log("updateInterns.js created as a new file");
    }
})

fs.writeFile("image.md", "image readme file", function (err, data) {
    if (err) {
        console.log("There was an error creating the file")
    } else {
        console.log("image.md created as a new file");
    }
})

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("interns");
//     dbo.createCollection("interns", function (err, res) {
//         if (err) throw err;
//         console.log("interns collection created!");
//         db.close();
//     });
// }); 