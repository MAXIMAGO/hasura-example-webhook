const express = require('express')
const app = express()

var bodyParser = require('body-parser')//add this

app.use(bodyParser())//add this before any route or before using req.body

app.post('/insertCar', (req, res) => {
    console.log(req.body)
    res.send(true)
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})