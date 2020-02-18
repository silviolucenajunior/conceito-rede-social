const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(fileUpload({
    createParentPath: true
}));

server.post('/register-person', function(request, response) {
    console.log("Registering a new person in database");
    console.log(request.files.file);
    console.log("****");

    response.sendStatus(200);
});

server.get('/register-person', function(request, response) {
    response.send('testin');
});

server.listen(8093, function() {
    console.log("Server up...");
})