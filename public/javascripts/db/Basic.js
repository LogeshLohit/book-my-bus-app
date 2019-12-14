let name  = "madam";
let obj = {
	name : "Logesh",
	id : 3
}
console.log(JSON.stringify(obj))
console.log(name.toString().toUpperCase().length)
console.log(name.split('').reverse().join('').toUpperCase()==(name.toUpperCase()))


function getvalue(){
	return 4;
}

let va = getvalue();

console.log('result : '+(va+9))