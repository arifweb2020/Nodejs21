// 1> one function call

// const mydata = require("./add")
// console.log(mydata(4,5))


// const mydata = require("./add")

// console.log(mydata)

// console.log(mydata.add(5,5))
// console.log(mydata.sub(10,5))

// easy way object destructuring

const {add,sub,name}= require("./add")

console.log(add(5,5))
console.log(sub(10,5))
console.log(name)