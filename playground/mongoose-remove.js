const {mongoose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User}    = require('./../server/models/user');

//Todo.remove({}) //remove all

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b157ca56458eca0af1c9328').then((todo)=>{
    console.log(todo);
});

T//odo.findByOneAndRemove()
