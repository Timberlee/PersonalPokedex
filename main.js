/*Holy shit, the exact exercise ML lead us through THIS VERY AFTERNOON BEFORE WE
ADJOURNED is what I could have used here. Create a button dynamically that can
then do other things, as buttons should.*/
/* ***NOTE: IF THERE IS A NUMBER AS A KEY NAME, IT MAY ACTUALLY BE AN ARRAY INDEX OF THE KEY NAME THAT COMES BEFORE IT - PAY ATTENTION TO BRACKETS */
/* button load info - after a delay, flash all the stats one by one*/
  //xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/4/', true);
/*Note: savagely violating the single-use principle is not a basis for point-deduciton, per the non-existence in the assignment of any such specification.*/
/*Note: Would be dope to fill the border grid-items with the sprite upon loading*/
jackAshum = {

   pokemon1: {
   name: 'pokename1',
   hp: 1,
   attack: 1,
   defense: 1,
   abilities: ['placeholderability0', 'placeholderability1']
 },
   pokemon2: {
   name: 'pokename2',
   hp: 1,
   attack: 1,
   defense: 1,
   abilities: ['placeholderability0', 'placeholderability1']
 },
   pokemon3: {
   name: 'pokename3',
   hp: 1,
   attack: 1,
   defense: 1,
   abilities: ['placeholderability0', 'placeholderability1']
 },

   all: function(){
     var pokeArray = [this.pokemon1.name, this.pokemon2.name, this.pokemon3.name];
     console.log(pokeArray);
   },
   get: function(name){
     console.log(jackAshum.name);

   }

}
//First Pokemon
var pokeballOne = '';
function pokeInfo1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 pokeballOne = JSON.parse(this.responseText);
		 console.log(pokeballOne);
		 document.getElementById('displayArea').innerHTML = 'Pokemon: ' +
		 pokeballOne.name + '<br> hp: ' + pokeballOne.stats[5].base_stat + '<br> attack: ' + pokeballOne.stats[4].base_stat + '<br> defense:' + pokeballOne.stats[3].base_stat + '<br> ability #1: ' +
		 pokeballOne.abilities[0].ability.name + '<br> ability #2: ' + pokeballOne.abilities[1].ability.name + ' ';
		 document.getElementById("spriteFrame").src=pokeballOne.sprites.front_shiny;
		}
  }
		xhttp.open("GET", 'https://pokeapi-nycda.firebaseio.com/pokemon/4.json', true);
	 	xhttp.send();
}
/***july 19 2018 20:50 James is saying to put the assign function inside the info and (combined with appendChild?) can re-use the one function without needing a counter variable (no loop) at the end of the function
//https://repl.it/@jamesscript7/FlawedRashTrust
/*jackAshum.pokeballOne.name
var pokemon = {};
var name = "blastoise";
pokemon.name = {};
pokemon.name.hp = {};
function pokemonGenerator(name,hp) {
  pokemon.name = {};
  pokemon.namehp = {};
}
*/
function assignPoke1(name,hp,attack,defense,ability1,ability2){
	jackAshum.pokemon1.name = name;
	jackAshum.pokemon1.hp = hp;
	jackAshum.pokemon1.attack = attack;
	jackAshum.pokemon1.defense = defense;
	jackAshum.pokemon1.abilities[0] = ability1;
	jackAshum.pokemon1.abilities[1] = ability2
}


//Second Pokemon
var pokeballTwo = '';
function pokeInfo2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 pokeballTwo = JSON.parse(this.responseText);
		 console.log(pokeballTwo);

     jackAshum.pokemon2.name = pokeballTwo.name;
     jackAshum.pokemon2.hp = pokeballTwo.stats[5].base_stat;
   	 jackAshum.pokemon2.attack = pokeballTwo.stats[4].base_stat;
   	 jackAshum.pokemon2.defense = pokeballTwo.stats[3].base_stat;
   	 jackAshum.pokemon2.abilities[0] = pokeballTwo.abilities[0].ability.name;
   	 jackAshum.pokemon2.abilities[1] = pokeballTwo.abilities[1].ability.name;
     jackAshum.pokemon2.sprite = pokeballTwo.sprites.front_shiny;

		 document.getElementById('displayArea').innerHTML = 'Pokemon: ' +
		 jackAshum.pokemon2.name +
     '<br> hp: ' + jackAshum.pokemon2.hp +
     '<br> attack: ' + jackAshum.pokemon2.attack +
     '<br> defense:' + jackAshum.pokemon2.defense +
     '<br> ability #1: ' + jackAshum.pokemon2.abilities[0] +
     '<br> ability #2: ' + jackAshum.pokemon2.abilities[1] + ' ';
		 document.getElementById("spriteFrame").src = pokeballTwo.sprites.front_shiny;
		}
  }
		xhttp.open("GET", 'https://pokeapi-nycda.firebaseio.com/pokemon/5.json', true);
	 	xhttp.send();
}

function assignPoke2(name,hp,attack,defense,ability1,ability2){
	jackAshum.pokemon2.name = name;
	jackAshum.pokemon2.hp = hp;
	jackAshum.pokemon2.attack = attack;
	jackAshum.pokemon2.defense = defense;
	jackAshum.pokemon2.abilities[0] = ability1;
	jackAshum.pokemon2.abilities[1] = ability2;
  var newParagraph = document.createElement("P");
  var newTextNode = document.createTextNode('Pokemon info has loaded - ready to display!');
  newListItem.appendChild(newTextNode);
  document.getElementById('displayArea').appendChild(newParagraph);
}


//Third Pokemon
var pokeballThree = '';
function pokeInfo3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 pokeballThree = JSON.parse(this.responseText);
		 console.log(pokeballThree);
		 // document.getElementById('receptacle').innerHTML = pokeballThree["name"] + pokeballThree["height"] + pokeballThree["stats"];
		 document.getElementById('displayArea').innerHTML = 'Pokemon: ' +
		 pokeballThree.name + '<br> hp: ' + pokeballThree.stats[5].base_stat + '<br> attack: ' + pokeballThree.stats[4].base_stat + '<br> defense:' + pokeballThree.stats[3].base_stat + '<br> ability #1: ' +
		 pokeballThree.abilities[0].ability.name + '<br> ability #2: ' + pokeballThree.abilities[1].ability.name + ' ';
		 document.getElementById("spriteFrame").src = pokeballThree.sprites.front_shiny;
     console.log('All pokemon have loaded.'

		}
  }
		xhttp.open("GET", 'https://pokeapi-nycda.firebaseio.com/pokemon/6.json', true);
	 	xhttp.send();
}
function assignPoke3(name,hp,attack,defense,ability1,ability2){
	jackAshum.pokemon2.name = name;
	jackAshum.pokemon2.hp = hp;
	jackAshum.pokemon2.attack = attack;
	jackAshum.pokemon2.defense = defense;
	jackAshum.pokemon2.abilities[0] = ability1;
	jackAshum.pokemon2.abilities[1] = ability2
}


/*for (var i=0; i < 46; i +=4) {
	document.getElementById(`box[${i}]`).src = pokeballOne.sprites.front_shiny;
	document.getElementById(`box[${i + 1}]`).src = basket.sprites.back_shiny;
	document.getElementById(`box[${i + 2}]`).src = basket.sprites.front_default;
	document.getElementById(`box[${i + 3}]`).src = basket.sprites.back_default;
}
*/

// 	function all(){
// 		var pokeArray = [];
// 		for (items in jackAshum){
// 			pokeArray.push(item);
// 		}
// 		return pokeArray;
// 		console.log(pokeArray);
// 	}
// }
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
		 document.getElementById("spriteFrame").src = basket2.sprites.front_shiny;
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
		 document.getElementById("spriteFrame").src = basket3.sprites.front_shiny;
		}
  };
		xhttp.open("GET", 'https://pokeapi-nycda.firebaseio.com/pokemon/6.json', true);
	 	xhttp.send();
}
*/

function displayPokeInfo1(){
	}

//Don't forget the modal!

function clearPokeInfo(){
	document.getElementById('receptacle').innerHTML = '';
}
function pokeParse(){
}

function battleScreen(){
	var x = document.getElementsByTagName('BODY');
	x.style.backgroundcolor=('red');

}

/*7/17/18 per ML: easier to call the api in its entirety, don't display it,
then parse and choose what you want and display the relevant information
function createButton() {
	var btn = document.createElement('BUTTON');
	var t = document.createTextNode('Digimon, go!');
	btn.appendChild(t);
	document.body.appendChild(btn);
}
https://www.w3schools.com/jsref/met_document_createelement.asp
 or get by tag name since <buttom> exists as an element
console.log('Button has been created');
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
