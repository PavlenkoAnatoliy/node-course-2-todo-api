const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');


  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b598ba2c4bb756c567a5237')
  }, {
    $set: {
      completed: true
    }
  },{
    returnOriginal: false
  })
  .then((result) => {
    console.log(result);
  });

  // db.collection('Users').findOneAndUpdate({
  //   age: 25
  // }, {
  //   $set: {
  //     name: 'Drue'
  //   }
  // },{
  //   returnOriginal: false
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b599303fae603deb354dd48')
  }, {
    $set: {
      name: 'Drue'
    },
    $inc: { age:  1 }
  },{
    returnOriginal: false
  })
  .then((result) => {
    console.log(result);
  });

  // client.close() 
});