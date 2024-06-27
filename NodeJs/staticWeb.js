const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')



let server = http.createServer((req,resp)=>{

    const urlpath =  req.url


    if(urlpath==="/home" || urlpath==="/index.html"){
        resp.setHeader("Content-Type","text/html")
            
        let home = fs.readFileSync(__dirname+"/index.html", "utf-8")
        resp.write(home)
        resp.end()
    }
    else if(urlpath==="/contact" || urlpath==="/contact.html"){
        resp.setHeader("Content-Type","text/html")
            
        let contact = fs.readFileSync(__dirname+"/contact.html", "utf-8")
        resp.write(contact)
        console.log(req)
        resp.end()
    }
    else{
        resp.setHeader("Content-Type","text/html")
        let NOTFOUND = fs.readFileSync(__dirname+"/notfoundpage.html", "utf-8")
        resp.write(NOTFOUND)
        resp.end()
    }



    resp.end()

})

server.listen(8080)


