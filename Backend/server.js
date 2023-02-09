const express=require('express')
const notes=require('./data')
const dotenv = require('dotenv')


const app = express();
dotenv.config();


app.get('/api/notes',(req,res)=>{

    res.json(notes)
})


app.get("/api/notes/:id", (req, res) => {
  
  const singlenote=notes.find((n)=>n._id===req.params.id)
  res.json(singlenote)

});

const PORT=process.env.PORT || 5000

console.log("man",PORT)

app.listen(PORT,(req,res)=>{

    console.log(`server starting at port ${PORT}`)
})