var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("node-mysql");
var app = new express();
app.listen(3000);

// create application/json parser 
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// set up EJS viewer
app.set("view engine", "ejs");
app.set("views", "./views");
// set root
app.use("/styles",express.static(__dirname + "/styles"));


/**
 * Start to action
 *
 */
app.get("/index", function(req, res) {
	res.render("index");
});

// app.get("/detail", function (req, res) {
// 	res.render("detail", {name: "Phuc.Bui"});
// });

// POST /login gets urlencoded bodies 
// app.post("/login", urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);
//   res.send('welcome, ' + req.body.username);
// });





