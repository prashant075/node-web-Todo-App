const {ObjectID, MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db)=> {
//   if (err) throw err;
//   var dbo = db.db("TodoApp");
//   var myquery = { address: 'kanpur' };
//   dbo.collection("user").deleteMany(myquery, (err, obj)=> {
//     if (err) throw err;
//     console.log(`${obj.result.n} document deleted`);
//     db.close();
//   });
// });


MongoClient.connect(url, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("TodoApp");
  var myquery = { _id: new ObjectID("5b11747f949b47c69aad1089") };
  dbo.collection("user").findOneAndDelete(myquery, (err, result)=> {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
