var fs = require("fs")

var path = require('path')
//const ext = process.argv[3]
//const file = process.argv[2]
const callback = (err, data) => {
    
        if (err) {
            console.log("An error has occurred. Abort everything!");
            return callback(err);
        }
        var array = files.filter(element =>
            path.extname(element).substring(1) === ext)
      
        array.forEach(element =>
            console.log(element))
            callback(null, array)
    
}
module.exports.myModule = function (file, ext, callback)
{
    fs.readdir(file ,callback);
    
}
