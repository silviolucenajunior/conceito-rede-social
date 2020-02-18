const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

server.post('/register-person', function(request, response) {
    console.log("Registering a new person in database");
});

server.get('/register-person', function(request, response) {
    response.send('testin');
});

server.listen(8093, function() {
    console.log("Server up...");
})