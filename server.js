const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cookieparser=require("cookie-parser")
const authroutes=require("./routes/Auth")
var cors = require('cors')
require('dotenv').config()
app.use(cookieparser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGDB).then(()=>{
    console.log("DATABASE CONNECTION SUCCESSFULLY");
}).catch(()=>console.log("DATABASE CONNECTION FAIL"))
app.get("/",(req,res)=>{
    res.send("working")
})
app.use("/api/auth",authroutes)













const PORT=process.env.PORT

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))