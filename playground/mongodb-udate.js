// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectId } = require('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp',  (err,  db)   => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to Mongo DB');
// delete many
// db.collection('UserData').findOneAndUpdate({_id: new ObjectId("593901c4157df535831f1d65")
// },    {
//   $set: {
//     completed: true
//   }
// },   {
//    returnOriginal: false
// }).then((result)  => {
//   console.log(result);
// });

db.collection('UserData').findOneAndUpdate({  _id: new ObjectId("59390a85157df535831f1ef1")
},    {
  $set: {
    Name: 'Pratap'
  },
  $inc:  {
    Age: 1
  }
},   {
   returnOriginal: false
}).then((result)  => {
  console.log(result);
});

  // db.close();
});
