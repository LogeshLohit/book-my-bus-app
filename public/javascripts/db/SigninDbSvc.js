var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
//mongoose.connect('mongodb://localhost:27017/bookmyapp', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://logeshjeppiaar:L!2108458@cluster0-hcsrv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var signInSchema = new mongoose.Schema({
	firstName : String,
	lastName: String,
	emailId: String,
	userName : String,
	password : String
})

module.exports = mongoose.model('userDetails',signInSchema,'userDetails');


//db.userDetails.insertOne({firstName:"Logesh", lastName:"S", emailId:"log@gmail.com", 
//userName:"logesh",password:"log123"});
/* var User = mongoose.model('userDetails',signInSchema,'userDetails');

User.create({firstName:"Rajesh",lastName:"S",emailId:"raj@gmail.com",userName:"raj",password:"raj123"},(err,data)=>{
	if(err)
		console.log('error')
	else if( data!=null){
		console.log(data)		
		let token = jwt.sign({data: "Mukesh", expiresIn : "1h"},"MYSecret")
		console.log('my token now : '+token)
	}else console.log('sorry data not found')
})

console.log('yup')
*/
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiTXVrZXNoIiwiZXhwaXJlc0luIjoiMWgiLCJpYXQiOjE1NjEzNzY0MDR9.coZJtxhLL43zo2lPEblgHbop0oaM9vO-eKPT6U9CzPE
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiTXVrZXNoIiwiZXhwaXJlc0luIjoiMWgiLCJpYXQiOjE1NjEzODIzNTl9.7sKhiW7y0ZYV4tji_-ZenG71bgl2f9M2bo9JqSMlPCo
/*var user = new User({
	userName : "Mukesh",
	password : "mu123"
})


User.create(user,(err,data)=>{
	if(err)
		console.log(err)
	console.log(data)
})*/

