const mypath = require ("path")

console.log(mypath.dirname("D:/Nodejs-21/path-module/index.js"))
console.log(mypath.extname("D:/Nodejs-21/path-module/index.js"))
console.log(mypath.basename("D:/Nodejs-21/path-module/index.js"))

// All in one

console.log(mypath.parse("D:/Nodejs-21/path-module/index.js"))

// to find the property 

const data = mypath.parse("D:/Nodejs-21/path-module/index.js")

console.log(data.name)