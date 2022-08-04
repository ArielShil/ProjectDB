const { request } = require('express');
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);


async function loginUser(details){ // Verify login 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var query = { user: String(details.ID), password: String (details.password) };
  var col = client.db("DB").collection("Users");
  var result = await col.findOne(query);
  client.close();
  console.log(result)
  return result;
}
exports.loginUser=loginUser;


/* Save new Product */
async function SaveNewProduct(details){  // save new iWatch to mongo
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("DB").collection("Products");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.SaveNewProduct = SaveNewProduct;


/* Save new User */ 

async function saveUser(details){  // save new customers
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("DB").collection("Users");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveUser = saveUser;


/* Get Exists User */




async function getUsers(){  // get all the exist users
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var dbo = client.db("DB");
  let collection= dbo.collection('Users');
  let res=await collection.find({}).toArray() 
  client.close();
  return res;
};
exports.getUsers = getUsers;



async function deleteUser(details){  //delete user
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var dbo = client.db("DB");
  var myquery = { USER: details };
  let collection= dbo.collection('Users');
  let res=await collection.deleteOne(myquery);
  client.close();
  return res;
};
exports.deleteUser = deleteUser;





async function saveorder(details){  //save new order
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("DB").collection("Orders");
  var result = await col.insertOne(details);
  client.close();
  return result;
}

exports.saveorder=saveorder;



async function closeOrders(details){  // mark order as completed
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var date=new Date()
  var split_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()
  var dbo = client.db("DB");
  var myquery = { name: details };
  var newvalues = { $set: { status: "Close",close_date:split_date } };
  let collection= dbo.collection('Orders');
  let res=await collection.updateOne(myquery,newvalues);
  client.close();
  return res;
};
exports.closeOrders = closeOrders;


async function GetOpenOrders(){  // find open orders
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var dbo = client.db("DB");
  var query = { status: "open" };
  let collection= dbo.collection('Orders');
  let res=await collection.find(query).toArray() 
  client.close();
  return res;
};
exports.GetOpenOrders = GetOpenOrders;