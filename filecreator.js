fs = require('fs');
fs.writeFile("findinterns.js", "test data", function (err, data) {
    if (err) {
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