var jwt = require('jsonwebtoken');

try{
	console.log(jwt.verify("eyJhbGciOiJIUzI1NiIsIR5cCI6IkpXVCJ9.eyJkYXRhIjoiTXVrZXNoIiwiZXhwaXJlc0luIjoiMWgiLCJpYXQiOjE1NjEzODI0NzR9.c7iwEVMS0s-3PEN2r1mKNXxhqXWCB-RRKjwVoF7wWyI",
		"MYSecret"));
}catch(err){
	console.log('error') 
}