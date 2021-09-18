const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('user')
})




const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})