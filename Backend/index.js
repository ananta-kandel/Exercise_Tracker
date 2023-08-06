const express = require('express')
var cors = require('cors');
require('dotenv').config()
const connectToMongoDB = require('./config/db.connect');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000; 
app.use(express.json())
//routes
const exercise = require('./routes/exercise_route')
app.use("/exercise",exercise)
const user = require('./routes/user_route')
app.use("/user",user)
//connect To Database
connectToMongoDB();

app.get("/",(req,res)=>{
    res.send("Hello world")
})


//Listen to server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })