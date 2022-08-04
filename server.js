const {Router} = require('express')
const express = require('express')

const {Collection} = require('mongodb')
const app = express()
const port = 3000
const mydb = require('./models/DBadapter.js')

const ejs = require('ejs');

app.use(express.static('public'))

app.get("/login",async(req,res)=>{ // Verify login by id
  var User =
  {
   ID:req.query.uname,
   password :req.query.psw,
 }
  async function myUser(details){
    await mydb.loginUser(details).then((result)=>{
      console.log("result:" , result);
      if (result == null){
        res.redirect('index.html')
      }
      else {
        for (const [key, value] of Object.entries(result)) {
        if (key == "user") {
          console.log(value);
          if (value.includes("admin")) {
            res.redirect('admin.html');
          }
          else {
            res.redirect('User.html');
          }
        }
        }
      }
    })};


 await myUser(User);
 console.log(User)
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

/* Add New Product */

app.get('/NewProduct', (req, res) => { //save new Product
  var NewProduct =
  {
    name: req.query.product_name,
    color: req.query.product_color,
    price: req.query.product_price,
    img: req.query.filebutton
  }
  async function addNew(details) {
    await mydb.SaveNewProduct(details).then((result) => res.redirect('admin.html'));
  }
  addNew(NewProduct);
 
})


/* Add USER */ 


app.get('/addUser', (req, res) => { // add new user by admin
  var newUser =
  {
    Name: req.query.id,
    password: req.query.password,
    Role: req.query.user,
    name: req.query.name
    
  }
  async function Newsave(details) {
    await mydb.saveUser(details).then((result) => res.redirect('admin.html'));
  }
  Newsave(newUser);

})


/* Get Exists Users   */

app.get("/getusers", (req, res) => { //get exist users from mongo
  async function users() {
    await mydb.getUsers().then((result) => res.send(result));
  }
 users();
});


app.get("/delete", (req, res) => { //delete user

  var Delete = req.query.user

  async function getclose(details) {
    await mydb.deleteUser(details).then((result) => res.redirect('admin.html'));
  }
  getclose(Delete);
});


/*Save Order */

app.get('/addorder', (req, res) => { // add order to mongo
  var date=new Date()
  var split_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()
 var neworder =
 {
   Name: req.query.first_name,
   Last_Name: req.query.last_name,
   address: req.query.address,
   payment: req.query.payment,
   order_date:split_date,
   status:"open"
 }
 async function myorder(details) {
   await mydb.saveorder(details).then((result) => res.redirect('http://localhost:3000/index.html'));
 }
 myorder(neworder);

})

//Delete Order

app.get("/getclose", (req, res) => { 

  var close = req.query.first_name

  async function getclose(details) {
    await mydb.closeOrders(details).then((result) => res.redirect('adminOrders.html'));
  }
  getclose(close);
});


app.get("/getOpenOrders", (req, res) => { //get open orders from mongo
  async function getOrders() {
    await mydb.GetOpenOrders().then((result) => res.send(result));
  }
  getOrders();
});
