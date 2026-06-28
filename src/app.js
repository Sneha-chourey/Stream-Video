import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes
import userRouter from"./routes/user.routes.js"

app.get("/", (req, res) => {
  res.json({
    message: "Stream-Video API is running 🚀",
    version: "1.0.0",
    endpoints: "/api/v1/users"
  });
});
// routes declaration
app.use("/api/v1/users",userRouter)
app.get("/debug", (req, res) => {
    res.send("App is working");
});

export {app} 