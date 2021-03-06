const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task-manager')
const Schema = mongoose.Schema;

function capitalize (val) {
  if (typeof val !== 'string') {
      val = '';
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}

const userSchema = new Schema({
  firstName: {type: String, required: true, set: capitalize},
  lastName: {type: String, required: true, set: capitalize},
  email    : { type: String},
  password: {type: String, minlength: 8},
  avatarUrl: { type: String, default: 'images/default-avatar.png' }
});

const User = mongoose.model('users', userSchema);
module.exports = User;