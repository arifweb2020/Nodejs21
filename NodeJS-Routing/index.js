const http = require("http")

const server = http.createServer((req,res)=>{
   
    if (req.url = "/"){
        res.end("This is my home page asas");
    }
    else if (req.url = "/about"){
        res.end("This is my about  page");
    }

    else if (req.url = "/contact"){
        res.end("This is my contact  page");
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"})
        res.end("<h2>404 error page</h2>")
    }

})

server.listen(5000 , ()=>{
    console.log("server is running on port 5000")
})