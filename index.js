var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Have a nice from manik ec2'); //write a response to the client
  res.end(); //end the response
}).listen(88); //the server object listens on port 88
