jackAshum = {
  // myPokemon: {  }, Sam's suggestion 7/20 for the get method
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
     let pokeArray = [this.pokemon1.name, this.pokemon2.name, this.pokemon3.name];
     console.log(pokeArray);
   },

   get: function() {
     alert('fuck');
     var userInput = prompt("Enter a Pokemon name to search and return information from trainer inventory. no caps. no spaces. no emojis.");
     if (userInput == jackAshum.pokemon1.name){
       for(property in jackAshum.pokemon1){
         alert(jackAshum.pokemon1.hasOwnProperty(property));
     // } else {
     //   alert('buttholes');
     }
    }
}
}






//First Pokemon
var pokeballOne = '';
function retrievePokemon1(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 pokeballOne = JSON.parse(this.responseText);
		 console.log(pokeballOne);
     jackAshum.pokemon1.name = pokeballOne.name;
     jackAshum.pokemon1.hp = pokeballOne.stats[5].base_stat;
     jackAshum.pokemon1.attack = pokeballOne.stats[4].base_stat;
     jackAshum.pokemon1.defense = pokeballOne.stats[3].base_stat;
     jackAshum.pokemon1.abilities[0] = pokeballOne.abilities[0].ability.name;
     jackAshum.pokemon1.abilities[1] = pokeballOne.abilities[1].ability.name;
     jackAshum.pokemon1.sprite = pokeballOne.sprites.front_shiny;

		 document.getElementById('descriptionArea1').innerHTML = 'Pokemon: ' +
		 jackAshum.pokemon1.name + '<br> hp: ' + jackAshum.pokemon1.hp +
     '<br> attack: ' + jackAshum.pokemon1.attack + '<br> defense:' +
     jackAshum.pokemon1.defense+ '<br> ability #1: ' +
		 jackAshum.pokemon1.abilities[0]+ '<br> ability #2: ' +
     jackAshum.pokemon1.abilities[1]+ ' ';
		 document.getElementById("spriteFrame1").src=jackAshum.pokemon1.sprite;
     // document.getElementById("jumboTron").src=jackAshum.pokemon1.sprite;

     }
  }
    // xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/150/', true);
		xhttp.open("GET", 'https://raw.githubusercontent.com/Timberlee/pokemonAPI/master/mewtwo.txt', true);
	 	xhttp.send();
    function displaySprite(){
        var icon = document.createElement('IMG');
        icon.setAttribute('src', pokeballOne.sprites.front_shiny);
        icon.setAttribute('background-color', 'green');
        icon.setAttribute('height', '320');
        icon.setAttribute('width', '320');
        icon.setAttribute('alt', 'sprite should load here');
        document.getElementById('jumboTron').appendChild(icon);
    }

    console.log('Pokemon 1 has loaded.');
}




// function myButton() {
//     var btn = document.createElement("BUTTON");
//     var t = document.createTextNode("CLICK ME");
//     btn.appendChild(src=);
//     document.body.appendChild(btn);
// }
//
// function myFunction() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "img_pulpit.jpg");
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
// }



//Second Pokemon
var pokeballTwo = '';
function retrievePokemon2() {
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

		 document.getElementById('descriptionArea2').innerHTML = 'Pokemon: ' +
		 jackAshum.pokemon2.name +
     '<br> hp: ' + jackAshum.pokemon2.hp +
     '<br> attack: ' + jackAshum.pokemon2.attack +
     '<br> defense:' + jackAshum.pokemon2.defense +
     '<br> ability #1: ' + jackAshum.pokemon2.abilities[0] +
     '<br> ability #2: ' + jackAshum.pokemon2.abilities[1] + ' ';
		 document.getElementById("spriteFrame2").src = pokeballTwo.sprites.front_shiny;
		}
  }
    // xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/136/', true);
		xhttp.open("GET", 'https://raw.githubusercontent.com/Timberlee/pokemonAPI/master/flareon.txt', true);
	 	xhttp.send();
    console.log('Pokemon 2 has loaded');
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
  document.getElementById('descriptionArea2').appendChild(newParagraph);

}


//Third Pokemon
var pokeballThree = '';
function retrievePokemon3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 pokeballThree = JSON.parse(this.responseText);
		 console.log(pokeballThree);

     jackAshum.pokemon3.name = pokeballThree.name;
     jackAshum.pokemon3.hp = pokeballThree.stats[5].base_stat;
   	 jackAshum.pokemon3.attack = pokeballThree.stats[4].base_stat;
   	 jackAshum.pokemon3.defense = pokeballThree.stats[3].base_stat;
   	 jackAshum.pokemon3.abilities[0] = pokeballThree.abilities[0].ability.name;
   	 jackAshum.pokemon3.abilities[1] = pokeballThree.abilities[1].ability.name;
     jackAshum.pokemon3.sprite = pokeballThree.sprites.front_shiny;

     document.getElementById('descriptionArea3').innerHTML = 'Pokemon: ' +
		 jackAshum.pokemon3.name +
     '<br> hp: ' + jackAshum.pokemon3.hp +
     '<br> attack: ' + jackAshum.pokemon3.attack +
     '<br> defense:' + jackAshum.pokemon3.defense +
     '<br> ability #1: ' + jackAshum.pokemon3.abilities[0] +
     '<br> ability #2: ' + jackAshum.pokemon3.abilities[1] + ' ';
		 document.getElementById("spriteFrame3").src = pokeballThree.sprites.front_shiny;

		}
  }
    // xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/78/', true);
		xhttp.open("GET", 'https://raw.githubusercontent.com/Timberlee/pokemonAPI/master/rapidash.txt', true);
	 	xhttp.send();
    console.log('Pokemon 3 has loaded');
}




/*
for (var i=0; i < 46; i +=4) {
	document.getElementById(`box[${i}]`).src = pokeballOne.sprites.front_shiny;
	document.getElementById(`box[${i + 1}]`).src = basket.sprites.back_shiny;
	document.getElementById(`box[${i + 2}]`).src = basket.sprites.front_default;
	document.getElementById(`box[${i + 3}]`).src = basket.sprites.back_default;
}*/
//Alternately, can name every fourth box a different class.
//Likewise, dynamically get the length of the number of boxes


/*function battleScreen(){
	var x = document.getElementsByTagName('BODY');
	x.style.background-image=('battleScreen.jpeg');

}*/

/***july 19 2018 20:50 James is saying to put the assign function inside the info function and (combined with appendChild?) can re-use the one function without needing a counter variable (no loop) at the end of the function
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
My original, manually-entered function
function assignPoke1(name,hp,attack,defense,ability1,ability2){
	jackAshum.pokemon1.name = name;
	jackAshum.pokemon1.hp = hp;
	jackAshum.pokemon1.attack = attack;
	jackAshum.pokemon1.defense = defense;
	jackAshum.pokemon1.abilities[0] = ability1;
	jackAshum.pokemon1.abilities[1] = ability2
}
*/


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
