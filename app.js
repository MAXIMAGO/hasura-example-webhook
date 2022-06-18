const express = require('express')
const app = express()

var bodyParser = require('body-parser')//add this

app.use(bodyParser())//add this before any route or before using req.body

app.post('/insertCar', (req, res) => {
    console.log(req.body)
    res.send(true)
})

app.post('/newsletter', (req, res) => {
  console.log('Sending Newsletter')
  const newCar = req.body.payload.event.data.new
  console.log(`${newCar.make} ${newCar.model} is new in stock. Try it out!`)
  res.status(200).send({"email": true})
})


let port = process.env.PORT
if (port == null || port == "") {
  port = 8000
}
app.listen(port, () => {
  console.log(`Hasura Example Webhook listening on port ${port}`)
})