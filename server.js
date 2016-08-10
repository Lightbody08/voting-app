'use strict';
var app = require('express')();

app.get('/', function(req, res) {
	res.send("hello, it's me");
});

app.listen(process.env.PORT || 80, function () {
	if (process.env.PORT) {
		console.log('Example app listening on port' + process.env.PORT + '!');
	} else {
		console.log('Example app listening on port 80!');
	}
});