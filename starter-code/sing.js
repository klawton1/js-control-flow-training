console.log("sing.js loaded");
var bottles = Number(prompt("how many bottles of beer?"));
while(bottles > 0) {
	if (bottles === 1) {
		console.log(bottles + ' bottle of beer on the wall,');
		console.log(bottles + ' bottle of beer!');
		console.log('Take one down and pass it around,');
		console.log('No bottles of beer on the wall!');
		break;
	}
	console.log(bottles + ' bottles of beer on the wall,');
	console.log(bottles + ' bottles of beer!');
	console.log('Take one down and pass it around,');
	bottles --;
	if (bottles === 1) {
	console.log(bottles + ' bottle of beer on the wall!');
	continue;
	}
	console.log(bottles + ' bottles of beer on the wall!');
}
