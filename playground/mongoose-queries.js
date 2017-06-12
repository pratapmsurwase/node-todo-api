const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

User.findById('5939577be2e7ad2820c75d2b').then((user)  => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
},  (e )  => {
  console.log(e);
});

// Todo.find ({
//   _id: id
// }).then((todos)  => {
//   console.log('todos' ,  todos);
// });
// Todo.findOne({
//   _id: id
// }).then((todos)  => {
//   comsole.log('todo', todo);
// });
