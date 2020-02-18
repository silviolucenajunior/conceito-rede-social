const express = require('express');
const server = express();

server.post('register-person', function(request, response) {
    console.log("Registering a new person in database");
});

server.listen(8093, function() {
    console.log("Server up...");
})