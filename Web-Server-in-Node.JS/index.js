const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("This is my server")
})

server.listen(8000 , ()=>{
    console.log("server is running on port 8000")
})