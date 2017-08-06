var Pokemon = function(pokemonObj){
  this.name = pokemonObj.name;
  this.id = pokemonObj.id;
  this.attack = pokemonObj.attack;
  this.defense = pokemonObj.defense;
  this.hp = pokemonObj.hp;
  this.front_picture = pokemonObj.front_picture;
  this.back_picture = pokemonObj.back_picture;
  this.type = pokemonObj.type;
  this.move = pokemonObj.move;
  this.fightHp = pokemonObj.fightHp;
}

module.exports = Pokemon;