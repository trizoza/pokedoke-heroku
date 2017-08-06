
var Player = require('./models/player');
var Pokemon = require('./models/pokemon');
var Map = require('./views/map');
var UI = require('./views/ui');

var app = function() {
 
  // new UI();
 

  var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  };

  var allPokemon = function(){
    makeRequest("http://localhost:3000/sourcePokemons", function(){
      if(this.status !== 200) return;
        var jsonString = this.responseText;
        var jsonObject = JSON.parse(jsonString);


        var pokemonData = jsonObject;

        for (var each of pokemonData) {
          var nameCapitalised = each.name.toUpperCase();
          each.name = nameCapitalised;
        }
        
        new Map(pokemonData, Player, Pokemon);
      });
  }

  allPokemon();
}



window.onload = app();