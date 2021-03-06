const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

function capitalize (val) {
  if (typeof val !== 'string') {
      val = '';
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}

const taskSchema = new Schema({
  name: {Type: String, required: true, set: capitalize},
  lenght: {Type: Number},
  goals: { Type: String},
  status: {Type: String}
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;