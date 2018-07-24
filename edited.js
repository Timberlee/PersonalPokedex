// Tried to pull off calling all of it in one function 
// Still getting that problem with 3 clicks

monArr = [];
jackAshum = {
  pokemon: {},
  all: function() {
    // console.log(jackAshum.pokemon);
    monArr = Object.entries(jackAshum.pokemon);
    return monArr;
  },

  get: function(name) {
    var name = name.toLowerCase();
    return jackAshum['pokemon'][name];
  },
}

// API and POKE DATA in ONE 

function retrievePokemon(number){
  x = number;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 pokemonData = JSON.parse(this.responseText);
		 console.log(pokemonData);
     jackAshum.pokemon[pokemonData.name] = {
      hp: pokemonData['stats'][5]['base_stat'],
      attack: pokemonData['stats'][4]['base_stat'],
      defense: pokemonData['stats'][3]['base_stat'],
      abilities: [pokemonData['abilities'][0]['ability']['name'], pokemonData['abilities'][1]['ability']['name']],
      sprites: pokemonData['sprites']['front_default'],
     }
		}
  }
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${x}`, true);
	 	xhttp.send();
    console.log(`Pokemon ${x} has loaded.`);

    jackAshum.all();
    array = monArr;
    var i;

    if (x == 150) {
      i = 0;
    } else if (x == 136) {
      i = 1;
    } else if (x == 78) {
      i = 2;
    }

    document.getElementById('displayArea').innerHTML = 'Pokemon: ' +
     array[i][0] + '<br> hp: ' + array[i][1]['hp'] +
     '<br> attack: ' + array[i][1]['attack'] + '<br> defense:' +
     array[i][1]['defense'] + '<br> ability #1: ' +
     array[i][1]['abilities'][0] + '<br> ability #2: ' +
     array[i][1]['abilities'][1] + ' ';
     document.getElementById("spriteFrame").src = array[i][1]['sprites'];
}
