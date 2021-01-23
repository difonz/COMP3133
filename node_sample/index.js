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

const fs = require('fs')

//read file
fs.readFile("input.txt",(err,data)=>{

    if(err)
    {
        console.error(err)
    }
    else
    {

    
    console.log(data.toString('utf8'))
    console.log(data[0])
    // from 0 to 5, 7 to 11
    console.log(data.toString('utf8',0,5))
    console.log(data.toString('utf8',7,11))
    }
})
console.log("--END--")

//write file
fs.writeFile("output.txt","Hello World",(err)=>{
    console.log("Write success")

})

//append
fs.appendFile("output.txt","REEEE",(err)=>{
    console.log("Append success")
    
})
//delete files
fs.unlink("output.txt",(err)=>{
    console.log("File Deleted Sucessful")

})
//remove directory
fs.rmdir("test")

fs.open("input.txt","r+",(err,fd)=>
{
    if(err)
    {
        console.log("Error while opening file")
    }
    else
    {
        var dataBuffer = Buffer.alloc(10)
        
        fs.read(fd,dataBuffer,0,dataBuffer.length,0,(err)=>{
            console.log(`Data: ${dataBuffer.toString()}`)
        })

        const inputBuffer = Buffer.from("Write Data")
        fs.write(fd,inputBuffer,(err)=>{
            
            if(err)
            {
                console.error(err)
            }
            else
            {
                console.log("Write : Sucessful")
            }
        })
    }
})

fs.readdir(".",(err,listoffiles)=>
{
    console.log("listoffiles")
    for(f in listoffiles){
        if(f.isFile)
        {
            console.log(`${f} is a file`)
        }
        else 
        {
            console.log(`${f} is a directory`)
        }
    }
})