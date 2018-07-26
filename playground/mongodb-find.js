const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

 
  db.collection('Todos').find().count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
    })
    .catch(err => console.log('Unable to fetch todos', err))
  // db.collection('Todos').find({_id: new ObjectID('5b58fd1f5369c0cfc66dd89e')}).toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch(err => console.log('Unable to fetch todos', err))

  // client.close();
});