var MongoClient = require('mongodb').MongoClient;
var PokemonQuery = function(){
 this.url = 'mongodb://localhost:27017/pokedoke_db';
};

PokemonQuery.prototype = {
 all: function(onQueryFinished){
   MongoClient.connect(this.url, function(err,db){
     if(db){
       var collection = db.collection('sourcePokemons');
       collection.find().toArray(function(err,docs) {
         onQueryFinished(docs);
         console.log(collection);
       });
     }

   });
 }
}



module.exports = PokemonQuery;