const MongoClient = require('mongodb').MongoClient;

MongoClient.connect ('mongodb://localhost:27017/TodoApp',  (err,  db)   => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to Mongo DB');
// db.collection('Todos').insertOne({
//  text: 'Something to do',
//  completed: false
// },  (err,   result) => {
//   if (err) {
//     return console.log('Unable to insert Todo');
//   }
//   console.log(JSON.stringify(result.ops,  undefined , 2));
// });
db.collection('UserData').insertOne({
  Name: 'Pratham',
  Age: 12,
  Location: 'Pune'
}, (err, result)  => {
  if (err) {
    return console.log('Unable to insert Todo');
  }
  console.log(JSON.stringify(result.ops, undefined,2));
});


  db.close();
});
