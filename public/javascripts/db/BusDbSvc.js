var mongoose = require('mongoose');
console.log("trying to connect db...")
mongoose.connect('mongodb+srv://logeshjeppiaar:L!2108458@cluster0-hcsrv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
//mongodb+srv://logeshjeppiaar:<password>@cluster0-hcsrv.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://logeshjeppiaar:<password>@cluster0-hcsrv.mongodb.net/test?retryWrites=true&w=majority
var Schema = mongoose.Schema;
console.log("db connected ")
var busSchema = new mongoose.Schema({
	busRouteNo : String,
	busDescription : String,
	fromCity : String,
	toCity : String,
	busFare : Number
})

module.exports = mongoose.model('bus',busSchema,'bus');

// var Bus = mongoose.model('bus',busSchema,'bus');

// var hydBus = new Bus({
// 	busRouteNo : "89F",
// 	busDescription : "AC bus",
// 	fromCity : "Chennai",
// 	toCity : "Bangalore",
// 	busFare : 550
// })


// Bus.create(hydBus,(err,data)=>{
// 	if(err)
// 		console.log(err)
// 	console.log(data)
// })


