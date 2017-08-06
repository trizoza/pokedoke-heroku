//// HANDLE MOVEMENT ON MAP ////////////
var Game = require('./game');

//// need to require player for coordinates ////////
var Map = function(pokemonData, Player, Pokemon) {

  var game = new Game(pokemonData, Player, Pokemon);
  var welcomeScreen = document.querySelector('#welcomeScreen');
  var chooseScreen = document.querySelector('#choose_screen');
  var fightScreen = document.querySelector('#fight_screen');
  var homeScreen = document.querySelector('#home_screen');
  var craigScreen = document.querySelector('#craig_screen');
  var simonScreen = document.querySelector('#simon_screen');
  var zsoltScreen = document.querySelector('#zsolt_screen');
  var winScreen = document.querySelector('#win_screen');
  var mapCanvas = document.querySelector("#map");

  var context = mapCanvas.getContext('2d');

  var x = 60;
  var y = 420;

  var increment = 10;
  var ashDown = document.createElement('img');
  ashDown.src = "/img/ash_down.png";
  var ashUp = document.createElement('img');
  ashUp.src = "/img/ash_up.png";
  var ashRight = document.createElement('img');
  ashRight.src = "/img/ash_right.png";
  var ashLeft = document.createElement('img');
  ashLeft.src = "/img/ash_left.png";
  var ashWidth = 40;
  var ashHeight = ashWidth;
  var house = document.createElement('img');
  house.src = "/img/house.png";
  var gym = document.createElement('img');
  gym.src = "/img/gym.png";
  var grass = document.createElement('img');
  grass.src = "/img/grass.png";
  var pavement = document.createElement('img');
  pavement.src = "/img/pavement.png";
  var craig = document.createElement('img');
  craig.src = "img/craig.png";
  var bulbasaurPic = document.createElement('img');
  bulbasaurPic.id = 'bulbasaur';
  bulbasaurPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  var charmanderPic = document.createElement('img');
  charmanderPic.id = 'charmander';
  charmanderPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';
  var squirtlePic = document.createElement('img');
  squirtlePic.id = 'squirtle';
  squirtlePic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
  
  var mattPic = document.createElement('img');
  mattPic.id = 'win_matthew';
  mattPic.src = 'img/matt.png';

  var upButton = document.querySelector('#up-button');
  var downButton = document.querySelector('#down-button');
  var leftButton = document.querySelector('#left-button');
  var rightButton = document.querySelector('#right-button');
  var aButton = document.querySelector('#a-button');
  var nameSubmitButton = document.querySelector('#submit_name');
  var fightOpponant;

  preloadFirstThreePokemon = function() {
    bulbasaurPic.onload = function() {
      chooseScreen.appendChild(bulbasaurPic);
    }
    charmanderPic.onload = function() {
      chooseScreen.appendChild(charmanderPic);
    }
    squirtlePic.onload = function() {
      chooseScreen.appendChild(squirtlePic);
    }
    winScreen.appendChild(mattPic);
  };
  preloadFirstThreePokemon();

  loadCanvas = function() {
    pavement.onload = function() {
      context.drawImage(this, 0, 0, 580, 460);
      ashDown.onload = function() {
        context.drawImage(this, x - 20, y - 20, ashWidth, ashHeight);
      };
      ashUp.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      ashLeft.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      ashRight.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      craig.onload = function() {
        context.drawImage(this, 220, 280, ashWidth, ashHeight);
      };
      house.onload = function() {
        context.drawImage(this, 0, 270, 150, 130);
      };
      gym.onload = function() {
        context.drawImage(this, 0, 0, 220, 170);
        context.drawImage(this, 360, 0, 220, 170);
      };
      grass.onload = function() {
        context.drawImage(this, 540, 400, 40, 60);
        context.drawImage(grass, 500, 400, 40, 60);
        context.drawImage(grass, 460, 400, 40, 60);
        context.drawImage(grass, 420, 400, 40, 60);
        context.drawImage(grass, 380, 400, 40, 60);
        context.drawImage(grass, 340, 400, 40, 60);
        context.drawImage(grass, 300, 400, 40, 60);
        context.drawImage(grass, 260, 400, 40, 60);
        context.drawImage(grass, 540, 340, 40, 60);
        context.drawImage(grass, 500, 340, 40, 60);
        context.drawImage(grass, 460, 340, 40, 60);
        context.drawImage(grass, 420, 340, 40, 60);
        context.drawImage(grass, 380, 340, 40, 60);
        context.drawImage(grass, 340, 340, 40, 60);
        context.drawImage(grass, 300, 340, 40, 60);
        context.drawImage(grass, 260, 340, 40, 60);
        context.drawImage(grass, 540, 280, 40, 60);
        context.drawImage(grass, 500, 280, 40, 60);
        context.drawImage(grass, 460, 280, 40, 60);
        context.drawImage(grass, 420, 280, 40, 60);
        context.drawImage(grass, 380, 280, 40, 60);
        context.drawImage(grass, 340, 280, 40, 60);
        context.drawImage(grass, 300, 280, 40, 60);
        context.drawImage(grass, 260, 280, 40, 60);
      };
      drawMap();
      context.drawImage(ashDown, x - 20, y - 20, ashWidth, ashHeight);
    }; 
  };

  drawMap = function() {
    context.drawImage(pavement, 0, 0, 580, 460);
    context.drawImage(house, 0, 270, 150, 130);
    context.drawImage(gym, 0, 0, 220, 170);
    context.drawImage(gym, 360, 0, 220, 170);
    context.drawImage(grass, 540, 400, 40, 60);
    context.drawImage(grass, 500, 400, 40, 60);
    context.drawImage(grass, 460, 400, 40, 60);
    context.drawImage(grass, 420, 400, 40, 60);
    context.drawImage(grass, 380, 400, 40, 60);
    context.drawImage(grass, 340, 400, 40, 60);
    context.drawImage(grass, 300, 400, 40, 60);
    context.drawImage(grass, 260, 400, 40, 60);
    context.drawImage(grass, 540, 340, 40, 60);
    context.drawImage(grass, 500, 340, 40, 60);
    context.drawImage(grass, 460, 340, 40, 60);
    context.drawImage(grass, 420, 340, 40, 60);
    context.drawImage(grass, 380, 340, 40, 60);
    context.drawImage(grass, 340, 340, 40, 60);
    context.drawImage(grass, 300, 340, 40, 60);
    context.drawImage(grass, 260, 340, 40, 60);
    context.drawImage(grass, 540, 280, 40, 60);
    context.drawImage(grass, 500, 280, 40, 60);
    context.drawImage(grass, 460, 280, 40, 60);
    context.drawImage(grass, 420, 280, 40, 60);
    context.drawImage(grass, 380, 280, 40, 60);
    context.drawImage(grass, 340, 280, 40, 60);
    context.drawImage(grass, 300, 280, 40, 60);
    context.drawImage(grass, 260, 280, 40, 60);
    context.drawImage(craig, 220, 280, ashWidth, ashHeight);
  };

  var moveAsh = function(directionPic, xInc, yInc) {
    drawMap();
    context.drawImage(directionPic, x - 20 + xInc, y - 20 + yInc, ashWidth, ashHeight);
    context.drawImage(gym, 0, 0, 220, 170);
    x += xInc;
    y += yInc;
    console.log(x,y);
    checkIfInGrass();
    checkForWin();
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);
    if (mapCanvas.style.zIndex == 100) {

      if (event.keyCode === 39) {
        // right
        if (x >= 560) {
          moveAsh(ashRight, 0, 0);
        }
        else if (x === 340 && 20 <= y && y <= 180) {
          moveAsh(ashRight, 0, 0);
        }
        else if (x === 200 && 270 <= y && y <= 330) {
          moveAsh(ashRight, 0, 0);
        }
        else{
          moveAsh(ashRight, increment, 0);
        }
      }

      if (event.keyCode === 37) {
        // left

        if (x <= 20) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 240 && 30 <= y && y <= 180) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 170 && 20 === y) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 170 && 260 <= y && y <= 410) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 280 && 270 <= y && y <= 330) {
          moveAsh(ashLeft, 0, 0);
        }
        else{
          moveAsh(ashLeft, -increment, 0);
        }
      }

      if (event.keyCode === 38) {
        // up

        if (y <= 20) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 420 && 20 <= x && x <= 160) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 190 && 20 <= x && x <= 230) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 190 && 350 <= x && x <= 560) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 340 && 210 <= x && x <= 270) {
          moveAsh(ashUp, 0, 0);
        }
        else {
          moveAsh(ashUp, 0, -increment);
        }
      }

      if (event.keyCode === 40) {
        // down

        if (y >= 440) {
          moveAsh(ashDown, 0, 0);
        }
        else if (y === 250 && 20 <= x && x <= 160) {
          moveAsh(ashDown, 0, 0);
        }
        else if (x >= 170 && x <= 230 && 20 === y) {
          moveAsh(ashDown, 0, 0);





        }
        else if (y === 260 && 210 <= x && x <= 270) {
          moveAsh(ashDown, 0, 0);
        }
        else {
          moveAsh(ashDown, 0, increment);
        }
      }

      //////////// ENTER HOME ////////////////////////////////////////////////////////////////////////
      if (event.keyCode === 72) {
        // h
        if ((x === 50 || x===60) && y === 420) {
          toggleViews(mapCanvas, homeScreen);
          atHome();
        }

      }


    }
    
  };


  var initiateFight = function(opponant){
    if (game.player.pokemonOnHand.length >= 1 && opponant.pokemonOnHand.length >= 1) {
      console.log(opponant);
      toggleViews(mapCanvas, fightScreen);

     fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress><img id='opponantPokemon' src="+ opponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+opponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+opponant.pokemonOnHand[0].fightHp+" max="+opponant.pokemonOnHand[0].hp+"></progress><img id='fight_textbox' src='/img/message.png'></img>";

     fightScreen.innerHTML += "<p id='move_text'>Your "+game.player.pokemonOnHand[0].name+" fights against "+opponant.pokemonOnHand[0].name+"!</p>";
      generateMiniatures(game.player, opponant);
      
    }
  }


  ///////////// GRASS FIGHT ON /////////////////////////////////////////////////////////////////
  var checkIfInGrass = function() {
    var self = this;
    if (x >= 260 && y >= 280) {

      var randNum = Math.ceil(Math.random()*(10 - 0));      

      if (randNum === 10) {
        randNum = 0;
        console.log('you are being attacked');
   
        fightOpponant = game.grassOpponant;
        initiateFight(fightOpponant);
        console.log(fightOpponant);
      }
    }

    if(x==90 && y==190){
      fightLocation = "gym1";
      fightOpponant = game.gymOpponant1;

      console.log(fightOpponant);
    }


    if(x==450 && y==190){
      fightLocation = "gym2";
      fightOpponant = game.gymOpponant2;

      console.log(fightOpponant);
    }
  }
  ///////////// GRASS FIGHT OVER /////////////////////////////////////////////////////////////////

  //////////// AT HOME ////////////////////////////////////////////////////////////////////////

  var atHome = function() {
    ////////////// REVIVE FAINTED POKEMONS //////////////////////////////////////////////////////
    game.revivePokemons(game.player);
    //////////////// SETUP HTML //////////////////////////////////////////////////////////////////
    homeScreen.innerHTML = "";
    var welcomeAtHome = document.createElement('p');
    welcomeAtHome.innerText = "Welcome home " + game.player.name +"! Here you can take a rest and let your Pokémon rest too. Once you leave home, your Pokémon will be again strong and healthy. Press A to hit the world!";
    homeScreen.appendChild(welcomeAtHome);
    //////////////////////// POKEDEX SELECTION ///////////////////////////////////////////////////
    var selectionContainer = document.createElement('div');
    homeScreen.appendChild(selectionContainer);
    var pokedexSelection = document.createElement('select');
    pokedexSelection.className = 'selection';
    var populateSelectionDropDown = function () {
      if (game.player.pokedex.length >=1) {
        game.player.pokedex.sort(function(a, b) {
          return a.id - b.id;
        });
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Choose a Pokémon from Pokedex";
        selectionContainer.appendChild(selectionAdvice);
        selectionContainer.appendChild(pokedexSelection);
        var predefinedPokeOption = document.createElement('option');
        predefinedPokeOption.innerText = "...";
        pokedexSelection.innerHTML = "";
        pokedexSelection.appendChild(predefinedPokeOption);
        for(var each of game.player.pokedex) {
          var pokeOption = document.createElement('option');
          pokeOption.innerText = each.name;
          pokedexSelection.appendChild(pokeOption);
        }
      }
      else {
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Pokedex empty";
        selectionContainer.appendChild(selectionAdvice);
      }
    }

    populateSelectionDropDown();

    var pokemonDetails = document.createElement('div');
    homeScreen.appendChild(pokemonDetails);

    var handleSelectChange = function(event) {
      pokemonDetails.innerHTML="";
      var p = document.createElement('p');
      var img = document.createElement('img');
      var nameOfSelectedPokemon = "";
      for(var each of game.player.pokedex) {
        if (each.name === this.value) {
          p.innerText += "Name: " + each.name;
          nameOfSelectedPokemon = each.name;
          p.innerText += "\nHP: " + each.hp;
          p.innerText += "\nAttack: " + each.attack;
          p.innerText += "\nDefense: " + each.defense;
          img.src = each.front_picture;
        }
      }
      pokemonDetails.appendChild(img);
      pokemonDetails.appendChild(p);
      var addToHandButton = document.createElement('button');
      addToHandButton.innerText = "Add to hand";
      addToHandButton.className = 'selection';
      pokemonDetails.appendChild(addToHandButton);

      var handleButtonClick = function(){
        if (game.player.pokedex.length >= 1) {
          for(var i = 0; i < game.player.pokedex.length; i++) {
            if (game.player.pokedex[i].name === nameOfSelectedPokemon) {
              if (game.player.pokemonOnHand.length < 6) {
                game.player.pokemonOnHand.push(game.player.pokedex[i]);
                game.player.pokedex.splice(i, 1);
                pokemonDetails.innerHTML="";
              }
            }
          }
        }
        populateSelectionDropDown();
        generatePokemonOnHandOnScreen();
      }
      addToHandButton.onclick = handleButtonClick;
      console.log('event', event);
    }

    pokedexSelection.onchange = handleSelectChange;
    //////////////// AT HOME END OF POKEDEX SELECTION /////////////////////////////

    //////////////// AT HOME START OF POKEMON ON HAND /////////////////////////////
    var handShowContainer = document.createElement('div');
    homeScreen.appendChild(handShowContainer);
    var generatePokemonOnHandOnScreen = function() {

        handShowContainer.innerHTML = "";
        var pok0img = document.createElement('img');
        var pok1img = document.createElement('img');
        var pok2img = document.createElement('img');
        var pok3img = document.createElement('img');
        var pok4img = document.createElement('img');
        var pok5img = document.createElement('img');
        var populatePokemonPics = function() {
          handShowContainer.innerHTML = "";
          if (game.player.pokemonOnHand.length === 6) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            pok0img.onload = function() {
              handShowContainer.appendChild(pok0img);
            }
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
            pok3img.src = game.player.pokemonOnHand[3].front_picture;
            handShowContainer.appendChild(pok3img);
            pok4img.src = game.player.pokemonOnHand[4].front_picture;
            handShowContainer.appendChild(pok4img);
            pok5img.src = game.player.pokemonOnHand[5].front_picture;
            handShowContainer.appendChild(pok5img);
          }
          else if (game.player.pokemonOnHand.length === 5) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            handShowContainer.appendChild(pok0img);
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
            pok3img.src = game.player.pokemonOnHand[3].front_picture;
            handShowContainer.appendChild(pok3img);
            pok4img.src = game.player.pokemonOnHand[4].front_picture;
            handShowContainer.appendChild(pok4img);
          }
          else if (game.player.pokemonOnHand.length === 4) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            handShowContainer.appendChild(pok0img);
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
            pok3img.src = game.player.pokemonOnHand[3].front_picture;
            handShowContainer.appendChild(pok3img);
          }
          else if (game.player.pokemonOnHand.length === 3) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            handShowContainer.appendChild(pok0img);
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            handShowContainer.appendChild(pok1img);
            pok2img.src = game.player.pokemonOnHand[2].front_picture;
            handShowContainer.appendChild(pok2img);
          }
          else if (game.player.pokemonOnHand.length === 2) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            pok0img.onload = function() {
              handShowContainer.appendChild(pok0img);
            }
            pok1img.src = game.player.pokemonOnHand[1].front_picture;
            pok1img.onload = function() {
              handShowContainer.appendChild(pok1img);
            }
          }
          else if (game.player.pokemonOnHand.length === 1) {
            pok0img.src = game.player.pokemonOnHand[0].front_picture;
            pok0img.onload = function() {
              handShowContainer.appendChild(pok0img);
            }
          }
        }
        
        populatePokemonPics();

        pok0img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[0];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(0, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok1img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[1];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(1, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok2img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[2];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(2, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok3img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[3];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(3, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok4img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[4];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(4, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }
        pok5img.onclick = function() {
          var pokemonToBeMoved = game.player.pokemonOnHand[5];
          game.player.pokedex.push(pokemonToBeMoved);
          game.player.pokemonOnHand.splice(5, 1);
          populateSelectionDropDown();
          populatePokemonPics();
        }

    }
    
    generatePokemonOnHandOnScreen();
        

    /////////////// AT HOME END OF POKEMON ON HAND /////////////////////////////////

    ///////////////////////// LEAVE HOME ////////////////////////////////////

  };
  //////////// END OF AT HOME ////////////////////////////////////////////////////////////////////////


  //////////////////////// WITH CRAIG or SIMON ////////////////////////////////////////////
  var withCraig = function() {
    craigScreen.innerHTML = "<p id='craigSpeech'>Hi "+game.player.name+"! My name is CRIG MORTOB!  Be careful... the Meadows are full of wild Pokémon and there also some tough trainers in our gyms!</p><img src='./img/brockCraig.png' id='brockCraig'>";
  }

  var withSimon = function() {
    if(game.gymOpponant2.pokemonOnHand.length > 0){
      simonScreen.innerHTML = "<p id='simonSpeech'>Morning guys! My Name is SIMON. Step inside and I will take you on with my grassy friends!</p><img src='./img/simon2.png' id='zsoltachu'><img src='./img/grassIcon.png' id='gymBadge'>";
    }
    else{
      simonScreen.innerHTML = "<p id='simonSpeech'> Wow, you guys are SO talented! Here is a badge for yourselves!</p><img src='./img/simon2.png' id='zsoltachu'><img src='./img/earthBadge.png' id='gymBadge'>";
    }
  }

  var withZsolt = function() {
    if(game.gymOpponant1.pokemonOnHand.length > 0){
      zsoltScreen.innerHTML = "<p id='zsoltSpeech'>HELLO!!! My Name is ZSOLT. Fight my electric buddies and feel the ZSOLTAGE!!!</p><img src='./img/zsoltBod.png' id='zsoltachu'><img src='./img/electricIcon.png' id='gymBadge'>";
    }
    else{
      zsoltScreen.innerHTML = "<p id='zsoltSpeech'> Wow, good stuff! You are beautiful people! Take this badge, you earned it!</p><img src='./img/zsoltBod.png' id='zsoltachu'><img src='./img/thunderBadge.png' id='gymBadge'>";
    }
  }

  ///////////// GENERATE MINI PICTURES OF POKEMON IN FIGHT ////////////////////////////////////////
  
  var generateMiniatures = function(player,opponant) {
    console.log('generating miniatures');

    var playerDiv = document.createElement('div');
    playerDiv.className = 'player_div';
    fightScreen.appendChild(playerDiv);
    if (player.pokemonOnHand.length > 0) {
      console.log('generating miniatures inside');
      for (var i = 1; i < player.pokemonOnHand.length; i++) {
        var miniPic = document.createElement('img');
        miniPic.src = player.pokemonOnHand[i].front_picture;
        miniPic.className = 'minipic_on_hand';
        playerDiv.appendChild(miniPic);
      }
    }
    if (player.faintedPokemons.length > 0) {
      for (var each of player.faintedPokemons) {
        var miniPic = document.createElement('img');
        miniPic.src = each.front_picture;
        miniPic.className = 'minipic_fainted';
        playerDiv.appendChild(miniPic);
      }
    }
    
    var opponantDiv = document.createElement('div');
    fightScreen.appendChild(opponantDiv);
    opponantDiv.className = 'opponant_div';
    if (opponant.pokemonOnHand.length > 0) {
      for (var i = 1; i < opponant.pokemonOnHand.length; i++) {
        var miniPic = document.createElement('img');
        miniPic.src = opponant.pokemonOnHand[i].front_picture;
        miniPic.className = 'minipic_on_hand';
        opponantDiv.appendChild(miniPic);
      }
    }
    if (opponant.faintedPokemons.length > 0) {
      for (var each of opponant.faintedPokemons) {
        var miniPic = document.createElement('img');
        miniPic.src = each.front_picture;
        miniPic.className = 'minipic_fainted';
        opponantDiv.appendChild(miniPic);
      }
    }
  };

  //////////////// BUTTONS ///////////////////////////////////////////////////////////////////////
  upButton.onclick = function(){
    if (y <= 20) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 420 && 20 <= x && x <= 160) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 190 && 20 <= x && x <= 230) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 190 && 350 <= x && x <= 560) {
      moveAsh(ashUp, 0, 0);
    }
    else {
      moveAsh(ashUp, 0, -increment);
    }
  }

  downButton.onclick = function(){
    if (y >= 440) {
      moveAsh(ashDown, 0, 0);
    }
    else if (y === 250 && 20 <= x && x <= 160) {
      moveAsh(ashDown, 0, 0);
    }
    else {
      moveAsh(ashDown, 0, increment);
    }
  }

  leftButton.onclick = function(){
    if (x <= 20) {
      moveAsh(ashLeft, 0, 0);
    }
    else if (x === 240 && 20 <= y && y <= 180) {
      moveAsh(ashLeft, 0, 0);
    }
    else if (x === 170 && 260 <= y && y <= 410) {
      moveAsh(ashLeft, 0, 0);
    }
    else{
      moveAsh(ashLeft, -increment, 0);
    }
  }

  rightButton.onclick = function(){
    if (x >= 560) {
      moveAsh(ashRight, 0, 0);
    }
    else if (x === 340 && 20 <= y && y <= 180) {
      moveAsh(ashRight, 0, 0);
    }
    else{
      moveAsh(ashRight, increment, 0);
    }
  }

  aButton.onclick = function(){
    ////////////////////////////////////////////
    

    ////////////////////////////////////////////

    ///////////////////IN FIGHT////////////////////////

    if (fightScreen.style.zIndex == 100 ) {

      if (game.player.pokemonOnHand.length >= 1 && fightOpponant.pokemonOnHand.length >= 1) {

     
          
          console.log('fight called');
        

        updateUI = function(){
          fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress><img id='opponantPokemon' src="+ fightOpponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+fightOpponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+fightOpponant.pokemonOnHand[0].fightHp+" max="+fightOpponant.pokemonOnHand[0].hp+"></progress> <img id='fight_textbox' src='/img/message.png'></img>"};

        if (game.player.turn == true) {

          game.fight(game.player, fightOpponant, game.calcDamage);
          updateUI();
         fightScreen.innerHTML += "<p id='move_text'>Your "+game.player.pokemonOnHand[0].name+" used "+game.player.pokemonOnHand[0].move+" against "+fightOpponant.pokemonOnHand[0].name+"!</p>";

        } 
        else {
          game.fight(game.player, fightOpponant, game.calcDamage);
          updateUI();
         fightScreen.innerHTML += "<p id='move_text'>"+fightOpponant.pokemonOnHand[0].name+" used "+fightOpponant.pokemonOnHand[0].move+" against your"+game.player.pokemonOnHand[0].name+"!</p>";
        }
        
        generateMiniatures(game.player, fightOpponant);
          
        console.log('fight called');
        
        ///////////////////////////////////////
        
        game.checkForFainted(game.player);
        game.checkForFainted(fightOpponant);

        console.log('aButton in fight has been clicked');
      }

      else {
        if(fightOpponant == game.grassOpponant){
          game.getFaintedPokemon(game.player, game.grassOpponant);
        }
        console.log('player', game.player)
        toggleViews(fightScreen, mapCanvas);
        
      }

    }

    ///////////// IN HOME /////////////////

    else if (homeScreen.style.zIndex == 100) {
      toggleViews(homeScreen, mapCanvas);
      console.log('zIndex of home', mapCanvas.style.zIndex);
      console.log('aButton has been clicked in house');
    }

    ////////////// ON MAP ///////////////////
    else if (mapCanvas.style.zIndex == 100) {
      /////////////CHEAT//////////////////////////////
      if (x === 170 && y === 20) {
        var cheat = prompt("You have found the wizard's corner. Answer his question correctly and all his Pokémon will be yours!\n\n'What is the best cohort in CodeClan?'");
        if (cheat === 'cohort9') {
          alert('Wizard: "You are right! Take all my Pokémon!"');
          for (var each of game.unusedPokemon) {
            var movePokemon = each;
            game.player.pokedex.push(movePokemon);
          }
          var lengthOfUnused = game.unusedPokemon.length;
          game.unusedPokemon.splice(0, lengthOfUnused);
          console.log('unused pokemon', game.unusedPokemon);
          console.log('unused pokedex', game.player.pokedex);
        }
        else {
          alert('Wizard: "No, that is not true and everyone knows that!"');
        }
      }
      /////////// STARTS THE GYM FIGHTS ///////////////////
      
      else if ((x == 90 || x == 450) && y == 190){
        initiateFight(fightOpponant);
        console.log('call initiate at gym')
      } 

      /////////////////////////////////////////////////////

      else if (x === 50 && y === 420) {
        toggleViews(mapCanvas, homeScreen);
        atHome();
        console.log('zIndex of mapCanvas', mapCanvas.style.zIndex);
      }
      ////////////// AROUND CRAIG OR SIMON OR ZSOLT ///////////////
      else if (x === 240 && y === 340) {
        toggleViews(mapCanvas, craigScreen);
        withCraig();
      }

      else if (x === 490  && y === 190 ) {
        toggleViews(mapCanvas, simonScreen);
        withSimon();
      }
      else if (x === 130  && y === 190 ) {
        toggleViews(mapCanvas, zsoltScreen);
        withZsolt();
      }
    }

    /////////////// WITH CRAIG OR SIMON //////////////////
    else if (craigScreen.style.zIndex == 100) {
      toggleViews(craigScreen, mapCanvas);
    }
    else if (simonScreen.style.zIndex == 100) {
      toggleViews(simonScreen, mapCanvas);
    }
    else if (zsoltScreen.style.zIndex == 100) {
      toggleViews(zsoltScreen, mapCanvas);
    }

  }
  ////////////// END OF ABUTTON //////////////////////

///////////// WIN SCREEN ///////////////////////

/////////// 01 WELCOME SCREEN ////////////////  
nameSubmitButton.onclick = function() {
  var nameToAdd = document.querySelector('#name_to_add');
  game.player.setPlayersName(nameToAdd.value.toUpperCase());
  //////

  game.populateOpponant(game.grassOpponant, 1);
  game.populateOpponant(game.gymOpponant1, 3);
  game.populateOpponant(game.gymOpponant2, 3);
  console.log('opponants pokemon', game.grassOpponant.pokemonOnHand[0]);

  toggleViews(welcomeScreen, chooseScreen);

  /////////// 02 CHOOSE SCREEN ////////////////  
  var welcomeQuote = document.createElement('p');
  chooseScreen.innerHTML = "";
  welcomeQuote.innerText = "Hey " + game.player.name + "! Choose your Pokémon, then... Go Away!"
  chooseScreen.appendChild(welcomeQuote);

  welcomeQuote.id ='welcomeQuote';

  var matthewPic = document.createElement('img');
  matthewPic.id ='mattOak';
  matthewPic.src = './img/matt.png';
  chooseScreen.appendChild(matthewPic);

  chooseScreen.appendChild(charmanderPic);
  chooseScreen.appendChild(bulbasaurPic);
  chooseScreen.appendChild(squirtlePic);

  bulbasaurPic.onclick = function() {
   game.playerPicksPokemon("BLASTOISE");
   console.log('sweet you have choosen bulbi! its gonna be muddy', game.player.pokemonOnHand[0]);
   toggleViews(chooseScreen, mapCanvas);
 }

 charmanderPic.onclick = function() {
   game.playerPicksPokemon("CHARMANDER");
   console.log('sweet you have choosen charmi! its gonna be hot', game.player.pokemonOnHand[0]);
   toggleViews(chooseScreen, mapCanvas);
 }

 squirtlePic.onclick = function() {
   game.playerPicksPokemon("SQUIRTLE");
   console.log('sweet you have choosen squirty! its gonna be wet', game.player.pokemonOnHand[0]);
   toggleViews(chooseScreen, mapCanvas);
 }

}

var checkForWin = function() {
  var pokeSum = 0;
  pokeSum = game.player.pokemonOnHand.length + game.player.faintedPokemons.length + game.player.pokedex.length;
  if (pokeSum === 151) {
    toggleViews(mapCanvas, winScreen);
  }
};

//////////////// BUTTONS ///////////////////////////////////////////////////////////////////////

var toggleViews = function(recentView, nextView) {
  recentView.style.zIndex = 1;
  nextView.style.zIndex = 100;

}

loadCanvas();

};

module.exports = Map;