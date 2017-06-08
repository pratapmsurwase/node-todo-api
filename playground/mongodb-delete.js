// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectId } = require('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp',  (err,  db)   => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to Mongo DB');
// delete many
db.collection('UserData').findOneAndDelete({_id: new ObjectId("5938125243c70d26d888d63f") }).then((results)  => {
  console.log(JSON.stringify(results, undefined,2));
});

  // db.close();
});
