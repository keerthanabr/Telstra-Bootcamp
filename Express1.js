var items = [ {username: "Peter", email:"peter@gmail.com"}  ]
var express=require("express")
var app=express()
var bodyparser=require('body-parser')
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
var server=app.listen(8087, function(){
    console.log("Server started to listen...")})

// app.get("/", function(req,res){
//     res.send("Hello from server") 
//     //console.log(req.param('name'))
//     //console.log(res.statusCode)
// })

app.get("/showitems", function(req,res){
    res.send(items) 
    //console.log(req.param('name'))
    //console.log(res.statusCode)
})

app.get("/", function(req,res){
    // var data=req.body
    // console.log(data)
    // items.push(data)
    // //res.send("data received")
    // res.redirect("/")
    res.send("hello from server")
})

// app.put("/", function(req,res){
    
// })

// app.delete("/", function(req,res){
    
// })

