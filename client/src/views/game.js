var Game = function(data, Player, Pokemon){
  console.log('data',data);

  this.unusedPokemon = data;
  this.player = new Player;
  this.grassOpponant = new Player;
  this.gymOpponant1 = new Player;
  this.gymOpponant2 = new Player;

};

Game.prototype = {

    playerPicksPokemon: function(pokeName){
      for (var i = 0; i < this.unusedPokemon.length; i++) {
        if (this.unusedPokemon[i].name === pokeName) {
          var pickedPokemon = this.unusedPokemon[i];
          pickedPokemon.fightHp = pickedPokemon.hp
          this.player.pokemonOnHand.push(pickedPokemon);
          this.unusedPokemon.splice(i, 1);
          console.log('i', i);
        }
      }
    },

    populateOpponant: function(opponant, numOfEnemies){
      ///////////////////////////////////////////
      //                                       //
      // MISSING CASE WHEN YOU CAUGHT THEM ALL //        
      //                                       //
      ///////////////////////////////////////////
      if (this.unusedPokemon.length >0) {
        for(i = 0; i < numOfEnemies; i++){
          console.log(this);
          if (opponant == this.gymOpponant1) {
            /// electric
            for (var each of this.unusedPokemon) {
              if (opponant.pokemonOnHand.length < 3) {
                if (each.type == "electric") {
                  var elecPokemon = each;
                  elecPokemon.fightHp = elecPokemon.hp;
                  opponant.pokemonOnHand.push(elecPokemon);
                }
              }
            }
            console.log('elec opponant', opponant);
          }
          else if (opponant == this.gymOpponant2) {
            /// electric
            for (var each of this.unusedPokemon) {
              if (opponant.pokemonOnHand.length < 3) {
                if (each.type == "grass") {
                  var grassPokemon = each;
                  grassPokemon.fightHp = grassPokemon.hp;
                  opponant.pokemonOnHand.push(grassPokemon);
                }
              }
            }
            console.log('grass opponant', opponant);
          }
          else {
            var takenPokemon = this.unusedPokemon.splice(Math.floor(Math.random()*this.unusedPokemon.length), 1)[0];
            takenPokemon.fightHp = takenPokemon.hp;
            opponant.pokemonOnHand.push(takenPokemon);
          }    
        }
      }
    },

    calcDamage: function(attaker, defender){
      var base = 20;
      var bonus = Math.round((attaker.attack - defender.defense)/3);
      console.log('bonus', bonus);
      var random = Math.random()*(1.2 - 0.8) + 0.8;
      console.log('rand', random);
      var damage = Math.round(base * random) + bonus;
      if (damage < 10) {
        damage = 10;
      }
      return damage;
    },

    fight: function(player, opponant, callback) {
      if (player.turn === true) {
        var damage = callback(player.pokemonOnHand[0], opponant.pokemonOnHand[0]);
        console.log('damage', damage);
        console.log('initial hp', opponant.pokemonOnHand[0].fightHp);
        opponant.pokemonOnHand[0].fightHp -= damage;
        if (opponant.pokemonOnHand[0].fightHp <= 0) {
          opponant.pokemonOnHand[0].fightHp = 0;
        }
        console.log('after hp', opponant.pokemonOnHand[0].fightHp);
        player.turn = false;
        opponant.turn = true;
      }
      else {
        var damage = callback(opponant.pokemonOnHand[0], player.pokemonOnHand[0]);
        console.log('damage', damage);
        console.log('initial hp', player.pokemonOnHand[0].fightHp);
        player.pokemonOnHand[0].fightHp -= damage;
        if (player.pokemonOnHand[0].fightHp <= 0) {
          player.pokemonOnHand[0].fightHp = 0;
        }
        console.log('after hp', player.pokemonOnHand[0].fightHp);
        player.turn = true;
        opponant.turn = false;
      }
    },

    checkForFainted: function(player) {
      if (player.pokemonOnHand[0].fightHp === 0) {
        var faintedPokemon = player.pokemonOnHand[0];
        player.faintedPokemons.push(faintedPokemon);
        player.pokemonOnHand.splice(0, 1);
      }
    },

    getFaintedPokemon: function(player, opponant) {
      if (opponant.pokemonOnHand.length === 0) {
        for (var i = 0; i < opponant.faintedPokemons.length; i++) {
          var pokemonToBeMoved = opponant.faintedPokemons[i];
          player.pokedex.push(pokemonToBeMoved);
          opponant.faintedPokemons.splice(0, 1);
          console.log('players pokedex', player.pokedex);
          console.log('players hand', player.pokemonOnHand);
        }
        this.setTurnTrue(player, this.grassOpponant);
      }
      console.log('fainted - populate');
     
      if(opponant.pokemonOnHand.length == 0){
        this.populateOpponant(opponant, 1);
      }

    },

    revivePokemons: function(player) {
      if (player.faintedPokemons.length > 0) {
        for (var i = 0; i < player.faintedPokemons.length; i++) {
          player.faintedPokemons[i].fightHp = player.faintedPokemons[i].hp;
          var revivedPokemon = player.faintedPokemons[i];
          player.pokemonOnHand.push(revivedPokemon);
        }
        player.faintedPokemons.splice(0, player.faintedPokemons.length);
      }
      if (player.pokedex.length > 0) {
        for (var each of player.pokedex) {
          each.fightHp = each.hp;
        }
      }
      if (player.pokemonOnHand.length > 0) {
        for (var each of player.pokemonOnHand) {
          each.fightHp = each.hp;
        }
      }
    },

    setTurnTrue: function(player, opponant) {
      player.turn = true;
      opponant.turn = false;
    }

  };


module.exports = Game;