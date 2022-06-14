const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')//add this

app.use(bodyParser())//add this before any route or before using req.body

app.post('/insertCar', (req, res) => {
    console.log(req.body)
    res.send(true)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})