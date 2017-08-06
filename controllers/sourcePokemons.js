var express = require('express');
var sourceRouter = express.Router();

var PokemonQuery = require('./db/PokemonQuery');
var query = new PokemonQuery();

sourceRouter.get('/',function(req, res) {
  query.all(function(docs) {
    res.json(docs);
  });

  console.log('source pokemon loaded');

});



module.exports = sourceRouter;