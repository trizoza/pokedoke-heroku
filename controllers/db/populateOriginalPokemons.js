var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var MongoClient = require('mongodb').MongoClient;

var PopulateDatabaseWithPokemons = function(){
 this.url = 'mongodb://localhost:27017/pokedoke_db';
};

PopulateDatabaseWithPokemons.prototype =  {

  makeRequest: function(callback) {
    console.log('requesting pokemon data');
    for (var i = 121; i < 152; i++) {
      var request = new XMLHttpRequest();
      var link = "http://pokeapi.co/api/v2/pokemon/" + i;
      request.open("GET", link);
      console.log(link);
      request.onload = callback;
      request.send();
    }
  },

  completeRequest: function() {
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var jsonObject = JSON.parse(jsonString);

    MongoClient.connect('mongodb://localhost:27017/pokedoke_db', function(err,db){
      if(db){
        var collection = db.collection('original151Pokemons');
        var object = { name: "",
        id: "",
        defense: "",
        attack: "",
        hp: "",
        front_picture: "",
        back_picture: "",
        type: "",
        move: ""
        };
        var pokemonName = jsonObject.forms[0].name;
        object.name = pokemonName;
        object.id = jsonObject.id;
        object.defense = jsonObject.stats[3].base_stat;
        object.attack = jsonObject.stats[4].base_stat;
        object.hp = jsonObject.stats[5].base_stat;
        object.front_picture = jsonObject.sprites.front_default;
        object.back_picture = jsonObject.sprites.back_default;
        object.type = jsonObject.types[0].type.name;
        object.move = jsonObject.moves[0].move.name;
        collection.insert(object);
        console.log('collection length', collection.length);
        console.log('pokemon id', object.id);
      }
      db.close();
    });
  }

};


var query = new PopulateDatabaseWithPokemons();

query.makeRequest(query.completeRequest);