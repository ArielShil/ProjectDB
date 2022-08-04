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


