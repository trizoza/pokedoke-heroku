var Game = require('../game');
var Player = ('../player');
var assert = require('assert');

describe('Game', function() {
  var player = new Player();
  var game = new Game();
  game.player = player;
  

  beforeEach(function() {
    
  });

  it('should have a player', function() {
    console.log(game.player);
  });

  it('should have an unused pokemon array', function() {
    player.getPokemon(1, unusedPokemon, player.pokemonOnHand);
    assert.equal(1, game.player.pokemonOnHand.length);
  });


});
