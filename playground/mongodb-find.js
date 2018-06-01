var {MongoClient,ObjectID} = require('mongodb');
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("TodoApp");
// //  dbo.collection("user").find({}).toArray(function(err, result) {
// //  dbo.collection("user").find({completed:false}).toArray(function(err, result) {
//   dbo.collection("user").find({
//     _id:new ObjectID('5b0ed257949b47c69aad0796')
//     }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(JSON.stringify(result,undefined,2));
//     db.close();
//   });
// });
// MongoClient.connect(url, (err, db)=>{
//   if(err){
//     return console.log('Unable to Connect to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//   var dbo = db.db("TodoApp");
//   dbo.collection('user').find().count().then((count)=>{
//     console.log(`Todos Count:${count}`);
//   },(err)=>{
//     console.log('Unable to fetch todos',err);
//   });
// });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TodoApp");
//  dbo.collection("user").find({}).toArray(function(err, result) {
//  dbo.collection("user").find({completed:false}).toArray(function(err, result) {
  dbo.collection("user").find({name:"Prashant"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result,undefined,2));
    db.close();
  });
});
