//console.log("welcome to node js");

// creating new file and if file is present then it updates the file

const myfile = require("fs")

//myfile.writeFileSync("read.txt" , "welcome to arif")


// for append the data in exiting file

//myfile.appendFileSync("read.txt" , " this nodejs tutorial")


// to read the data

const myfile1 = myfile.readFileSync("read.txt");

console.log(myfile1);

const org_data = myfile1.toString();

console.log(org_data)

// to rename file

myfile.renameSync("read.txt" , "read-write.txt")