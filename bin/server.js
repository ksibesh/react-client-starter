var express = require('express');
var bodyParser = require("body-parser");
var compression = require('compression')
var path = require('path');

var app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

var PORT = process.env.PORT || 8084;
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(PORT, function() {

	console.log('Server started on ' + process.env.NODE_ENV + " environment.");
	console.log('Check your code at http://localhost:' + PORT);
});
