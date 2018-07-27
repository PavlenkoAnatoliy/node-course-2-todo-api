const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemoved
// Todo.findByIdAndRemove

Todo.findByIdAndRemove({ _id: '5b5a8eaec4bb756c567a7f8e'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b5a8eaec4bb756c567a7f8e').then((todo) => {
  console.log(todo);
});
