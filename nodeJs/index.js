const PORT=8888;

const express = require('express');
const fs = require('fs');
const app = express();

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:%s', PORT)
})

app.use(function(request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

app.get("/getMessages", getMessages);
app.get("/getMessages/:id", getMessage);
app.post("/sendMessage", sendMessage);
app.post("/sendMessage/:id", sendComment);

function getMessages(request, response) {
    console.log('/getMessages/');

    var obj = JSON.parse(fs.readFileSync('resources/messages.json', 'utf8'));
    obj = obj.messages;

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(obj));
}

function getMessage(request, response) {
    var id = request.params.id;
    console.log('/getMessages/' + id);

    var obj = JSON.parse(fs.readFileSync('resources/messages.json', 'utf8'));
    obj = obj.messages;

    var i = 0;
    while (i < obj.length && obj[i].id != id) {
        i += 1;
    }
    if (i == obj.length) {
        obj = '{"error":  "Nothing found"}';
    } else {
        obj = obj[i];
    }  

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(obj));
}

function sendMessage(request, response) {}

function sendComment(request, response) {}