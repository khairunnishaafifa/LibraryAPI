var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
})

let users =
  [{
    id: "1",
    name: "Nasha",
    email: "nasha@gmail.com"
  },
  {
    id: "2",
    name: "Ayu",
    email: "ayu@gmail.com"
  }]


router.get('/test', function (req, res) {
  res.send({
    success: true,
    ListUser: users
  })
});

module.exports = router