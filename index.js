//now it load express module with `require` directive
var express = require('express')
var app = express()
var port_number = process.env.PORT || 8080;
const outputToWeb = "Hello Docker & Node JS on port " + port_number + "!";
const outputToConsole = "app listening on port " + port_number + "!";
	
//Define request response in root URL (/) and response with text Hello World!
app.get('/', function (req, res) {
	res.send(outputToWeb)	
})
//Launch listening server on port 8080 and consoles the log.
app.listen(port_number, function () {
	console.log(outputToConsole)
})