const express=require("express")

const env=require("dotenv")

const app=express()
const db=require("./config/db")
const userRouter=require("./routes/user-routes")

env.config({path:"./config/.env"})

db()
app.use(express.json())
app.use("/api/user",userRouter)




app.listen(process.env.PORT,console.log("server is started....http://localhost:5000"))