const MongoClient = require('mongodb').MongoClient;
const url  = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var dbo=db.db("TodoApp");
  var myobj ={
    name:"Prashant",
    address:"kanpur",
    Age:22,
    Work:"Accord"
  };
  dbo.collection("user").insertOne(myobj,function(err,res){
    if(err) throw err;
    console.log(res.ops[0]._id.getTimestamp());
    db.close();
  });
});
