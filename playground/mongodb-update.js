const {MongoClient,ObjectID} = require('mongodb');
const url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { address: "Valley 345" };
//   var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TodoApp");
  var myquery = { _id: new ObjectID("5b0ed257949b47c69aad0796")  };
  var newvalues = { $set: {
    name:'prashant',
  }, $inc:{
    add:1
  }};
  dbo.collection("user").findOneAndUpdate(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
