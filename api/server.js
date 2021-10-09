var http = require('http');

var server = http.createServer(function(req, res){
    var date = new Date().toISOString();
    console.log('sending date: ', date);
    res.end(date);
});

server.listen(8000);