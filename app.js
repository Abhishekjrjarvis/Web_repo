var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.ejs");
});


app.get("/landing", function(req, res){
	res.render("landing.ejs");
});

app.listen(process.env.PORT||5000, process.env.IP, function(){
	console.log("Server Has Started........");
});
                   