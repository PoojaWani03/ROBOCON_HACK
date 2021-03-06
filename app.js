// loading all the modules

const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("Website.html");
});

app.get("/landing",(req,res)=>{
    res.render("index.html");
});

app.get("/Vibration",(req,res)=>{
    res.render("Vibration.html");
});
app.get("/spo2",(req,res)=>{
    res.render("spo2.html");
});
app.get("/casestudy",(req,res)=>{
    res.render("casestudy.html");
});

app.get("/Traffic",(req,res)=>{
    res.render("Traffic.html");
})
app.get("/Impact",(req,res)=>{
    res.render("impact.html");
})
app.get("/Chatbot",(req,res)=>{
    res.render("Chatbot.html");
})


app.get("/About",(req,res)=>{
    res.render("AboutPage.html");
})

app.listen(process.env.PORT ||3000,()=>{
    console.log("Server started at port 3000");
});
