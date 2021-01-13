// importing express using the code module( library)
var http = require('http')
console.log("Hello World")

//creating server request and response
var server = http.createServer((req,res) =>
{   
    if(req.url == '/')
    {
    // adds response and ends loop
    res.write("<h1> Welcome back to NodeJS Programming</h1>")


    res.end()
    }

    if(req.url == '/hello')
    {
        res.write("<h2>Hello, Kevin Di Fonzo<h3>")
        res.end()
    }
})

server.listen(8088)
console.log("http://localhost:8088")