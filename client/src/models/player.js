var Player = function(){
  this.name = "";
  this.pokedex = [];//unlimited
  this.pokemonOnHand = []//4x
  this.pic = ""//url
  this.x = 2//600
  this.y = 2//600
  this.turn = true;
  this.faintedPokemons = [];
}

Player.prototype = {
  
  setPlayersName: function(newName){
    this.name = newName;
  }


};

module.exports = Player;