const express = require("express");
const app = express();
const port = 3000;
const mydb = require('./models/mongoDBconnect')
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })




app.get("/login",async(req,res)=>{ // Verify login by UserName
    var User =
     {
      UserName:req.query.uname,
      Password:req.query.psw
    }
    async function myUser(details){
      await mydb.loginUser(details).then((result)=> {
        console.log("result:" , result);
        if (result == null){
          res.redirect('index.html')
        }
        else {
          for (const [key, value] of Object.entries(result)) {
          if (key == "user") {
            console.log(value);
            if (value.includes("admin")) {
              res.redirect('index.html');
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
  