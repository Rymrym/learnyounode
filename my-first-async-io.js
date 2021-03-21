var fs = require("fs")
var lines = 0
fs.readFile(process.argv[2], 'utf8',function (err, data) {
    if (err) {
       return console.error(err);
    }
  var array = data.split('\n')   
  console.log( array.length-1)
 });
 