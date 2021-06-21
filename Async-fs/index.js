const data = require("fs")

// data.writeFile("read.txt" , " i am doing async opertaion)" , 
// (err)=>{
//     console.log("file is created")
// });



// update data in file

// data.appendFile("raed.txt" , " be ready" , (err)=>{

// console.log("data is updated");
// });

data.readFile("read.txt", "utf-8" , (err,mydata)=>{
    console.log(mydata)
})

