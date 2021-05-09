const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: String,
  jobTitle: {
    type: String,
    required: true,
  },
  contribution: String,
});

const model = mongoose.model('users', mySchema);

module.exports = model;
