var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId}  = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/todos' , (req , res)  => {
var todo = new Todo ({
  text:  req.body.text
});
todo.save().then((doc)  =>  {
  res.send(doc);
}, (e) => {
  res.status(400).send(e);
} );
});
app.get('/todos' , (req, res)  =>  {
  Todo.find().then((todos)  => {
    res.send({todos});
  }, (e)  => {
    res.status(400).send(e);
  })
});
//GET TODOS 12345
app.get('/todos/:id' ,  (req, res) => {
  res.send(req.params);
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)   =>  {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)  =>  {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
module.export= {app};









//   var newTodo = new Todo( {
//     text: 'Cook Dinner'
//   });
// newTodo.save().then((doc)  =>  {
//   console.log(' Saved Todo ' ,   doc);
// }, (e)  => {
//   console.log(' Unable to save the data');
// });
// var otherTodo = new Todo( {
// text:' in the moonlight '
// } );
// otherTodo.save().then((doc)   =>   {
//   console.log(JSON.stringify(doc,undefined, 2));
// },  (e) =>  {
//   console.log('Unable to save database');
// });
