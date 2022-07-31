var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const insertDB = function(err, db) {
    if (err) throw err;
    var dbo = db.db("Project");
    var myobj = { name: "Spone", price: "5", color: "silver" };
    dbo.collection("Products").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }


MongoClient.connect(url, insertDB);





