const express = require ("express");
const app = express();
const port = 8000;
const URLRoute = require("./routes/url")
const {connectiondb} = require ("./connection")
// db connection

connectiondb("mongodb://127.0.0.1:27017/short-url")
.then(() =>{console.log("DB connected")})

app.use(express.json())
app.use("/url", URLRoute)
// app.use("/:shortId", URLRoute)




app.listen(port, () => console.log('Server started'))