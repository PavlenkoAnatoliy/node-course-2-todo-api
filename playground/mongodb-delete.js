const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

  // Delete many
  // db.collection('Todos').deleteMany({text: 'Eat launch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat launch'})
  // .then((result) => {
  //   console.log(result);
  // });

  // find on and delete
  // db.collection('Todos').findOneAndDelete({completed: false})
  // .then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b590063235ea9d078e2db7b')})
  .then((result) => {
    console.log(result);
  });
  // client.close() 
});