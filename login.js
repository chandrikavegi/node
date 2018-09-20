var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.get('/', function (req, res) {
 res.sendFile( __dirname + "/" + "signup.html" );
});
var b = {
		A:['a1','a2','a3'],
		B:['b1','b2','b3'],
		C:['c1','c2','c3']
	};

console.log("request incoming");
app.post('/myfunc',function(req,res){
	console.log("enter");
	var a = {
		email:req.body.email,
		password:req.body.psw,
		FirstName:req.body.FirstName,
		LastName:req.body.LastName,
		country:req.body.country,
		city:req.body.city

	};

	

	console.log("value coming");
	res.send(a);
	console.log("response sent");
});
app.post('/getcountries',function(req,res){
 res.send(b[req.body.data]);
});
app.post('/getvalues',function(req,res){
	res.send(req.body);
	console.log(req.body);
})


var server = app.listen(process.env.PORT || 8086,function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)

})
