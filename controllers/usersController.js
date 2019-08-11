var mongoose = require('mongoose')
var user = require('../models/user')

var { successResponse, errorResponse } = require('../helpers/response')



exports.addUser = (req, res) => {
    console.log(req.body)
    var id = new mongoose.Types.ObjectId()
    var username = req.body.username
    var age = req.body.age
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var github = req.body.github

    var user1 = new user({
        _id: id,
        username: username,
        age: age,
        name: {
            firstName: firstName,
            lastName: lastName
        },
        github: github
    })

    user1.save(function (err) {
        if (err) throw err

        res.json(
            successResponse('User successfully saved', user1)
        )
    })
}



exports.getUser = (req, res) => {

    user.find().exec()
        .then((users) => {
            res.json(
                successResponse('User found', users)
            )
        })
        .catch((err) => {
            res.json(
                errorResponse('User not found', err, users)
            )
        })
}




exports.getUserByUname = (req, res) => {
    var uname = req.params.uname

    user.find({
        username: uname
    }).exec(function (err, users) {
        if (err) throw err
        
        res.json(
            successResponse('User found', users)
        )
        console.log(users)
    })
}




exports.getUserById = (req, res) => {
    var id = req.params.id

    user.findById(id, function (err, users) {
        if (err) throw err

        res.json(
            successResponse('User found', users)
        )
        console.log(users)
    })
}



exports.updateUser = (req, res) => {

    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, users) {
        if (err) throw err

        res.json(
            successResponse('User updated successfully', users)
        )
        console.log(users)
    })
}



exports.deleteUserByUname = (req, res) => {
    var uname = req.params.uname

    user.deleteOne({
        username: uname
    }).exec(function (err, users) {
        if (err) throw err

        res.json(
            successResponse('User deleted successfully', users)
        )
        console.log("User deleted successfully")
    })
}




exports.deleteUserById = (req, res) => {

    user.findByIdAndDelete(req.params.id, req.body, function (err, users) {
        if (err) throw err

        res.json(
            successResponse('User deleted successfully', users)
        )
        console.log("User deleted successfully")
    })
}