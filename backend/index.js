const express= require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"views")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());    


app.set("view engine","ejs");


app.listen(port,()=>{
    console.log("lisening");
    
})
app.get("/",(req,res)=>{
    res.send("<h1> well come to sushant web page </h1>");
})

app.get("/:username/:id",(req,res)=>{
    const {username,id}=req.params;
    res.send("<h2> your name is "+username+" and your id is "+id+"</h2>");
})

app.get("/search",(req,res)=>{
    const {q}=req.query;
    res.send("<h2> your search is "+q+"</h2>");
})
