/*Holy shit, the exact exercise ML lead us through THIS VERY AFTERNOON BEFORE WE
ADJOURNED is what I could have used here. Create a button dynamically that can
then do other things, as buttons should.*/

function battleScreen(){
	var x = document.getElementsByTagName('BODY');
	x.style.backgroundcolor=('red');

}

function pokeInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //document.getElementById("receptacle").innerHTML = this.responseText;
		 rawData = this.responseText;
		}
  };
  //xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/4/', true);
		xhttp.open("GET", 'https://jsonplaceholder.typicode.com/comments', true);
	 	xhttp.send();
}
function displayPokeInfo(){
	  document.getElementById('receptacle').innerHTML = rawData;
	}
function clearPokeInfo(){
	document.getElementById('receptacle').innerHTML = '';
}


/*7/17/18 per ML: easier to call the api in its entirety, don't display it,
then parse and choose what you want and display the relevant information

rawData
name
type1
type2

pokemonObject.abilities.ability.name
*/
/*
function createButton() {
	var btn = document.createElement('BUTTON');
	var t = document.createTextNode('Digimon, go!');
	btn.appendChild(t);
	document.body.appendChild(btn);
}
*/
/*https://www.w3schools.com/jsref/met_document_createelement.asp
 or get by tag name since <buttom> exists as an element
*/
/*console.log('Button has been created');
var u = document.getElementsByTagName('button');
console.log('Type of var u: ' + typeof u);
u.onclick = function createButtonTwo(){
	var btn2 = document.createElement('BUTTON');
	var t2 = document.createTextNote('Go go go!');
	btn.appendChild(t2);
	document.body.appendChild(btn2);
}
*/
// 	var v = document.createTextNode('I choose you!');
// }*/
// var w = document.getElementsByTagName('button');
// console.log(w);
// w.onclick = document.createTextNode('Button has been clicked!');
//
// //w.onclick = function battleScreen(){
// 	//var z = document.createTextNode('Button has been clicked!');
// 	//var x = document.body.appendChild('img');
// 	//var x = document.createElement('image');
// 	//x.src('images/battlescreen.jpeg');
// }
//
//
// //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img


/*var jackAshum = {

	pokemon1 {
		hp: 1,
		attack: 1,
		defense: 1,
		abilities = ['snort'', cough', 'sneeze', 'fart']
	}

	pokemon2 {
		hp: 1,
		attack: 1,
		defense: 1,
		abilities = ['snort', 'cough', 'sneeze', 'fart']
	}
	pokemon3 {
		hp: 1,
		attack: 1,
		defense: 1,
		abilities = ['snort', 'cough', 'sneeze', 'fart']
	}

	function all(){
		//return pokarray;
	}
 	function get(name){

	}
}
class Pokemon {
	constructor(name);
	this.name = name;
	this.hp = 50;
	this.attack = 25;
	this.defense = 25;
	this.abilities = ['snort', 'cough', 'sneeze', 'fart']
}
console.log('All pokemon have loaded.'
*/
