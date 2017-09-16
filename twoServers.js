var http = require('http');

var PORT = 7000;

function handleRequest(request, response) {
	response.end('Have an amazing day!'+ request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function(){
	console.log("We're listening on  " + PORT);
		
});
//////////////////////////////////////////////////////////////////

var PORT_TWO = 7500;

http
	.createServer(function(request,response){
		response.end("Rise and shine!");
	})
	.listen(Port_TWO, function(){
		console.log("Rise and shine friend");
	})
	
// function handleRequest(request, response){
// 	response.end('Rise and shine!' + request.url);
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT2, function(){
// 	console.log("We're listening on  " + PORT2);
// 	response.end("Your day is going to be terrible! " + request.url);
// }
// });

