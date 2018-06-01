var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// MongoClient.connect(url,(err,client)=>{
//   if(err){
//     return  console.log('Unable to connect to MongoDB server');
//   }
//   const mydb = database.db
//   console.log('Connected to MongoDB server');
//   db.collection('Todos').insertOne({
//       text:'Something to do',
//       completed:false
//   },(err,result)=>{
//     if(err){
//       return console.log('Unbale to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined, 2));
//   });
//   // db.collection('Users').insertOne({
//   //     name:'Prashant',
//   //     age:22,
//   //     location:'Kanpur'
//   // },(err,result)=>{
//   //   if(err){
//   //     return console.log('Unbale to insert todo',err);
//   //   }
//   //   console.log(JSON.stringify(result.ops,undefined, 2));
//   // });
//   db.close();
// });
