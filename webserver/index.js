var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-type": "text/html"
    });
    response.end('<html><body>Home, URL was ' + request.url  + '</body></html>');
    console.log('Url requested: ' + request.url);
}).listen(3000, 'localhost');

console.log('Server running at http://loaclhost:3000');
