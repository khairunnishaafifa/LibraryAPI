var express = require('express');
var router = express.Router();

var usersCtrl = require('../../controllers/usersController')



//Create
router.post('/adduser', usersCtrl.addUser)


//Read
router.get('/', usersCtrl.getUser)
router.get('/uname/:uname', usersCtrl.getUserByUname)
router.get('/id/:id', usersCtrl.getUserById)


//Update
router.put('/:id', usersCtrl.updateUser)


//Delete
router.delete('/uname/:uname', usersCtrl.deleteUserByUname)
router.delete('/:id', usersCtrl.deleteUserById)



module.exports = router