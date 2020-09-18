var express = require("express");
var app = express();
var EmojiConvertor = require('emoji-js');

var emoji = new EmojiConvertor();

app.get("/", function(req, res){
	console.log(emoji.replace_colons("Hello :smile:"));
	res.render("home.ejs");
});


app.get("/landing", function(req, res){
	res.render("landing.ejs");
});

app.listen(process.env.PORT||5000, process.env.IP, function(){
	console.log("Server Has Started........");
});
                   