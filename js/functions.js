// JavaScript Document

alert('this is an alert');

var name 

while (!name) { 
	name = prompt('What is your name?');
}
//(trace)
console.log(name);

document.write('Hello, ' + name );

for (var i = 0; i < 5; i++) {
	document.write('<br>' + i);
	document.write('<h1>' + i + '</h1>'); 
}

function isNameCool () {
	var name = prompt ('What is your name?');
	
	if (name == 'Kait') {
		document.write('That is an awesome name!');
	}else{
		document.write("I dont like your name");
	}
}

isNameCool();















