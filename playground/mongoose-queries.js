const {mongoose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User}    = require('./../server/models/user');
var id= '5b13960c4730b43f80cef6af';

if(!ObjectID.isValid(id)){
  console.log('Id not valid');
};

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Tdod',todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not Found');
  }
  console.log('Todo By Id', todo);
}).catch((e)=>console.log(e));

User.findById('5b12ddb541178e1010760997').then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
      console.log(e);
});
