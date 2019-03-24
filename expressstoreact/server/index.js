const express = require('express');
const bodyParser = require('body-parser');

// hook up our controller to our app in server/index.js.
const mc = require( __dirname + '/controllers/messages_controller');

const app = express(); 

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

// The url for this api should be /api/messages
const messagesBaseUrl = "/api/messages";

// Create a post, get, put, and delete endpoint 
// that use the corressponding method on the messages controller
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);

// add on a url parameter of id for the methods that are using it.
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3000;
app.listen(port, () => {

    console.log(`Server listening on port ${port}.`);

});