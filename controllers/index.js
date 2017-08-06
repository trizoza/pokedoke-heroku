var express = require('express');
var router = express.Router();
var path = require('path');
var fs=require('fs');
var pokemonData=fs.readFileSync('./controllers/pokemon.json');

// router.use('/sourcePokemons', require('./sourcePokemons'));

router.use('/sourcePokemons', function (req, res) {
	res.send(pokemonData);
})

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;