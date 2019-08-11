var mongoose = require('mongoose')

var schema = mongoose.Schema

var userSchema = new schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true
  },
  age: Number,
  name: {
    firstName: String,
    lastName: String
  },
  github: {
    type: String,
    validate: {
      validator: function(text) {
        return text.indexOf('https://github.com/') === 0
      },
      message: 'Github handle must start with https://github.com/'
    } 
  } 
},
{
  collection: 'users'
})

var user = mongoose.model('user', userSchema);

module.exports = user