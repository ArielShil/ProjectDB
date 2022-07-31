const {MongoClient} = require("mongodb");
const cli = require("nodemon/lib/cli");

const uri = "mongodb://localhost:27017/" //create new mongo client
const client = new MongoClient(uri);

async function findMongoDoc(color) {

//Connect to the db
    await client.connect(); 
    console.log("Connect Success"); 

//Check
    await client.db("admin").command({ping: 1}); 

//The function
    const Myresults = await client
    .db("ProjectDB")
    .collection("Products")
    .findOne( {color: `${color}`});

//Close the server
    await client.close()

    return Myresults;
}

exports.findcolor = findMongoDoc;



async function addUser(details){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("ProjectDB").collection("Users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  
  
  
  
  exports.addUser = addUser;