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
  res.send("YOU MADE IT to /:id");
});

// router.get('/new', function(req, res) {
//   res.send("YOU MADE IT to /NEW");
// });
//
// router.post('/', function(req, res) {
//   res.send("YOU MADE IT to /post");
// });
//
// router.get('/:id/edit', function(req, res) {
//   res.send("YOU MADE IT to /get id/EDIT");
// });
//
// router.put('/:id/', function(req, res) {
//   res.send("YOU MADE IT to /get id/PUT");
// });
//
// router.delete('/:id', function(req, res) {
//   res.send("YOU MADE IT to /get id/DELETE");
// });


module.exports = router;
