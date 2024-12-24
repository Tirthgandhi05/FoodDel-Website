import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connections
connectDB();


// api endpoint
app.use("/api/food",foodRouter)

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://tirthg2612:T%21rt%23%40data@cluster0.emv5y.mongodb.net/?