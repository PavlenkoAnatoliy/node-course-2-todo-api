const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var uid = '5b59a1107b601be28c545760';
// var id = '6b5a27da039c68f6d0718abf';

// if (ObjectID.isValid(id)) {
//   console.log(('ID not valid'))
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todos', todo);
// }).catch((e) => console.log(e));

User.findById(uid).then((user) => {
    if (!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
  }).catch((e) => console.log(e));