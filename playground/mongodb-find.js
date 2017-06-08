// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectId } = require('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp',  (err,  db)   => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to Mongo DB');

  // db.collection('UserData').find({
  //   _id: new ObjectId('5938101f41912f2478119917')
  // }).toArray().then((docs)  =>  {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs , undefined, 2));
  // },  (err)  => {
  //   console.log('Unable to connect to DB due to error');
  // });

  db.collection('UserData').find().count().then((count)  =>  {
    console.log(`UserData Count is  ${count}`);
    },  (err)  => {
    console.log('Unable to connect to DB due to error');
  });
  // db.close();
});
