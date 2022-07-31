const express = require('express')
const app = express()
const port = 3000


const mydb = require('./models/mongoDBconnect')

app.use(express.static('public'))

app.get('/getResults', (req, res) => { 

    const color = "Silver" 
    
    async function MyProgram(color) { 
        await db.findcolor(color).then((result)=>res.send(result))
    }
    MyProgram(color);
})

app.listen(port, () => {
console.log(`listening on http://localhost:${port}`)
})

app.get('/addUser'), (req,res)=> {
    var newUser=
    {
        Username:req.query.uname,
        Userpassword:req.query.psw
    }
    async function addUsers(details) {
        await mydb.result(details).then((result)=> res.send(result));
        addUsers(newUser);
    }
}