/*Holy shit, the exact exercise ML lead us through THIS VERY AFTERNOON BEFORE WE
ADJOURNED is what I could have used here. Create a button dynamically that can
then do other things, as buttons should.*/
/*Note: savagely violating the single-use principle is not a basis for point-deduciton, per the non-existence in the assignment of any such specification.*/
/*note: Would be dope to fill the border grid-items with the sprite upon loading*/
var jackAshum = {

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

var basket = '';
function pokeInfo1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

		 basket = JSON.parse(this.responseText);
		 // document.getElementById('receptacle').innerHTML = basket["name"] + basket["height"] + basket["stats"];
		 document.getElementById("receptacle").innerHTML =
		 basket.name + ' weight: ' + basket.weight + ' ' +
		 basket.stats[0].stat.name + ': ' + basket.stats[0].base_stat + ' ';
		 document.getElementById("pictureFrame").src = basket.sprites.front_shiny;
		}
  };
/* ***NOTE: IF THERE IS A NUMBER AS A KEY NAME, IT MAY ACTUALLY BE AN ARRAY INDEX OF THE KEY NAME THAT COMES BEFORE IT - PAY ATTENTION TO BRACKETS */
/* button load info - after a delay, flash all the stats one by one*/
  //xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/4/', true);

		xhttp.open("GET", 'https://pokeapi-nycda.firebaseio.com/pokemon/4.json', true);
	 	xhttp.send();
}


/*
var basket2 = '';
function pokeInfo2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

		 basket2 = JSON.parse(this.responseText);
		 // document.getElementById('receptacle').innerHTML = basket["name"] + basket["height"] + basket["stats"];
		 document.getElementById("receptacle").innerHTML =
		 basket2.name + ' weight: ' + basket2.weight + ' ' +
		 basket2.stats[0].stat.name + ': ' + basket2.stats[0].base_stat + ' ';
		 document.getElementById("pictureFrame").src = basket2.sprites.front_shiny;
		}
  };
		xhttp.open("GET", 'https://pokeapi-nycda.firebaseio.com/pokemon/5.json', true);
	 	xhttp.send();
}

var basket3 = '';
function pokeInfo3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

		 basket3 = JSON.parse(this.responseText);
		 // document.getElementById('receptacle').innerHTML = basket["name"] + basket["height"] + basket["stats"];
		 document.getElementById("receptacle").innerHTML =
		 basket3.name + ' weight: ' + basket3.weight + ' ' +
		 basket3.stats[0].stat.name + ': ' + basket3.stats[0].base_stat + ' ';
		 document.getElementById("pictureFrame").src = basket3.sprites.front_shiny;
		}
  };
		xhttp.open("GET", 'https://pokeapi-nycda.firebaseio.com/pokemon/6.json', true);
	 	xhttp.send();
}
*/

function displayPokeInfo(){
	}



function clearPokeInfo(){
	document.getElementById('receptacle').innerHTML = '';
}
function pokeParse(){
}

function battleScreen(){
	var x = document.getElementsByTagName('BODY');
	x.style.backgroundcolor=('red');

}
/*Stringify
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
*/
/*Parse
var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
*/


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


/*
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
