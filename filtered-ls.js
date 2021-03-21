var fs = require("fs");
var path = require('path')
const file = process.argv[2]
//console.log("Going to read directory /tmp");
fs.readdir(file, function (err, files) {
    if (err) {
        return console.error(err);
    }
    var array = files.filter(element =>
        path.extname(element).substring(1) === process.argv[3]
    )
   // console.log(array)
    array.forEach(element =>
        console.log(element))
});
