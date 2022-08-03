const {Router} = require('express')
const express = require('express')

const {Collection} = require('mongodb')
const app = express()
const port = 3000
const mydb = require('./models/DBadapter.js')



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