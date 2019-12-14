var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
//mongoose.connect('mongodb://localhost:27017/bookmyapp', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://logeshjeppiaar:L!2108458@cluster0-hcsrv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var loginSchema = new mongoose.Schema({
	userName : String,
	password : String
})

module.exports = mongoose.model('loginDtls',loginSchema,'userDetails');



//var User = mongoose.model('userDetails',loginSchema,'userDetails');
//finding user validation
// User.findOne({userName:"Mukesh",password:"mu123"},(err,data)=>{
// 	if(err)
// 		console.log('error')
// 	else if( data!=null){
// 		console.log(data)		
// 		let token = jwt.sign({data: "Mukesh", expiresIn : "1h"},"MYSecret")
// 		console.log('my token now : '+token)
// 	}else console.log('sorry data not found')
// })
//UserName availabilty check
// var temp= /Mukesh/i;
// User.findOne({userName:temp},(err,data)=>{
// 	if(err)git
// 		console.log('error')
// 	else if( data!=null){
// 		console.log('my token now :')
// 		}else console.log('sorry data not found')
// })


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

