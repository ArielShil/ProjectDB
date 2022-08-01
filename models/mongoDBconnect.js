const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017/"; // Create a new MongoClient
const client = new MongoClient(uri);

async function loginUser(details){ // Verify login 
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var query = { uname: "String(details.uname)", psw: "String (details.psw)" };
    var col = client.db("ProjectDB").collection("Users");
    var result = await col.findOne(query);
    client.close();
    console.log(result)
    return result;
  }
  exports.loginUser=loginUser;