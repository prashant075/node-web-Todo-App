const MongoClient = require('mongodb').MongoClient;
const url  = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var dbo=db.db("TodoApp");
  var myobj ={
    _id:123,
    name:"Prashant",
    address:"kanpur"
  };
  dbo.collection("user").insertOne(myobj,function(err,res){
    if(err) throw err;
    console.log(JSON.stringify(res.ops,undefined, 2));
    db.close();
  });
});
