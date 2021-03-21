var sum = 0;
var myArgs = process.argv.slice(2);
myArgs.forEach(element => {
    sum = sum + Number(element)
});
console.log(sum)
//process.stdout.write(sum.toString)
