var fs = require("fs")
var data = fs.readFileSync(process.argv[2]);
var array = data.toString().split('\n')
var lines = 0
array.forEach(element => {
    lines ++
});
console.log(lines-1)