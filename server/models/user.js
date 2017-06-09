var mongoose = require('mongoose');


var User = mongoose.model('User' , {
email: {
  type: String,
  required: true,
  trim : true,
  minlength : 1
}
});
// var user = new User ({
// email: ' pratap@exmaple.com'
// });
// user.save().then((doc)  => {
//   console.log('User Saved to ' , doc);
// } , (e)  => {
//   console.log('Unable to connect' , e);
// });

module.export= {User};
