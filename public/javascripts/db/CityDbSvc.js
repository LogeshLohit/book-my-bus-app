var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
//mongoose.connect('mongodb://localhost:27017/bookmyapp', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://logeshjeppiaar:L!2108458@cluster0-hcsrv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var citySchema = new mongoose.Schema({
	name : String
})

module.exports = mongoose.model('city',citySchema,'city');

/*var City = mongoose.model('city',citySchema,'city');
var Nagpur = new City({
	name:"Nagpur"
})
City.create(Nagpur,(err,data)=>{
	if(err){
		console.log("unable to add city : "+err)
	}else{
		console.log("added city sucessfully :"+data)
	}
})
*/
