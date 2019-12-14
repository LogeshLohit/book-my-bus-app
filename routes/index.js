var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const Bus = require('../public/javascripts/db/BusDbSvc')
const User = require('../public/javascripts/db/LoginDbSvc')
const UserDtls = require('../public/javascripts/db/SigninDbSvc')
const City = require('../public/javascripts/db/CityDbSvc')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Logeshs Express' });
// });	

router.get('/buses',(req,res)=>{
	console.log("request to list all buses..")
	Bus.find({},(error,busesList)=>{
		if(error)
			console.log(`unable to fetch bus details! ${error}`)
		else 
			res.send(busesList);
	})
})


router.get('/cities',(req,res)=>{
	City.find({},(error,citiesList)=>{
		if(error)
			console.log(`unable to fetch bus details! ${error}`)
		else 
			res.send(citiesList);
	})
})


router.post('/addUser',(req,res)=>
{
	console.log('add user method called with details'+req.body.toString())
	UserDtls.create({firstName:req.body.firstName,lastName:req.body.lastName,emailId:req.body.emailId,
		userName:req.body.userName,password:req.body.password},(err,data)=>{
	if(err){
		console.log('error while adding userdetails to db'+ err);
		res.send(null)
	}
	else if( data!=null){
		console.log("user details added sucessfully : "+data)
		res.send(data)
		//let token = jwt.sign({data: "Mukesh", expiresIn : "1h"},"MYSecret")
		//console.log('my token now : '+token)
	}//else console.log('sorry data not found')
	})

})


router.post('/login',(req,res)=>
{
	User.findOne({userName:req.body.userName,password:req.body.password},(err,data)=>{
	if(err)
		console.log('error')
	else if( data!=null){
		console.log('user dtls found!');
		let token = jwt.sign({data: req.body.userName, expiresIn : "1h"},req.body.userName+"MYSecret")
		console.log('my token now : '+token);
		try{
			jwt.verify(token, req.body.userName+"MYSecret");
			console.log('they are equal i guess' + JSON.stringify(jwt.verify(token, req.body.userName+"MYSecret")));
		}catch(err){
			console.log("token mismatch");
			res.send(null);
		}
		res.json({data:data, token:token});
	}else {
		console.log('user dtls not found!')
		res.send(null)
	}
	})
})

router.post('/userName',(req,res)=>{
	console.log('found user name : '+req.body.userName)
	User.findOne({userName:req.body.userName},(err,data)=>{
	if(err)
		res.send(error);
	else if( data!=null){
		res.send(false);
		}else res.send(true);
})

})

router.post('/addBus',(req,res)=>{
	console.log('found bus to be added : '+req.body.busRouteNo)
	var newBus = new Bus({
	busRouteNo : req.body.busRouteNo,
	busDescription : req.body.busDesc,
	fromCity : req.body.fromCity,
	toCity : req.body.toCity,
	busFare : req.body.busFare,
	addedDate : new Date(),
	addedBy : "admin"
})


Bus.create(newBus,(err,data)=>{
	if(err)
		res.send(false)
	else
		res.send(true)
	})

})

router.post('/deleteBus',(req,res)=>{
	console.log("found bus id : "+req.body.busId)
	Bus.deleteOne({id:req.body.busId},(err,data)=>{
	if(err){
		console.log(err);
		res.send(false)
	}else {
		console.log("response : "+res)
		res.send(true)
	}
	})
})

module.exports = router;
