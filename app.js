var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('hello world');
});

app.get('/blocks', function(request, response){
    var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
    response.redirect(301, '/parts')
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});