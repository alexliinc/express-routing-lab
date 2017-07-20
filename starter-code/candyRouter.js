var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{
    id: 1,
    name: "gum",
    color: "red"
  },
  {
    id: 2,
    name: "lolly",
    color: "blue"
  },
  {
    id: 3,
    name: "pop",
    color: "green"
  },
  {
    id: 4,
    name: "sod",
    color: "black"
  }
];
//bodyParser.json()
//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req, res) {
  // What would go here?
  // Hint: we want all candies in JSON format
  //res.send("you made it");
  res.json(candies); //+ bodyParser.JSON());
});

// Fill out the rest of the routes here

router.get('/:id', function(req, res) {
  //console.log(req);
  // //res.send("YOU MADE IT to /:id with :" + id);
  var current = candies[req.params.id - 1];
  res.json(current);
});

router.post('/', function(req, res) {
  //res.send("YOU MADE IT to /post");
  // var id = req.body.id;
  // var name = req.body.name;
  // var color = req.body.color;
  // var newCandy = {
  //   id: id,
  //   name: name,
  //   color: color
  // };
  // candies.push(newCandy);

  candies.push(req.body);
  console.log(req.body);
  res.send("posted");
  //res.send(id + name + color);
});

router.put('/:id/', function(req, res) {
  var current = req.params.id - 1;
  candies[current].id = req.body.id;
  candies[current].name = req.body.name;
  candies[current].color = req.body.color;
  //res.send("YOU MADE IT to /get id/PUT");
  res.send("you made a put");
});

router.delete('/:id', function(req, res) {
  //res.send("YOU MADE IT to /get id/DELETE");
  var current = req.params.id - 1;
  candies[current] = null;
  res.send("Removed" + current);
});

module.exports = router;
