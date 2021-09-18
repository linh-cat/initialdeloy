const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()
const users = require("./routes/user")

app.use(express.json())
app.use(cors())


app.use("/api/user", users)

app.get("/", (req, res) => {
    res.send("Server side is running ... !")
})

app.get('/user', (req, res) => {
    res.send('user')
})

// connect database
const uri = process.env.URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB connection establish...")
    })
    .catch(err => console.log("MongoDB connection failed", err.message))


// port
const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})