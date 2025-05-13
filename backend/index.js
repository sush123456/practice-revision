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
    res.render("index.ejs");
})

