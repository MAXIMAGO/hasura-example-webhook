const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/validate-registration', (req, res) => {
    console.log(`Query traffic office for registration number.`)
    res.status(200).send({car: undefined})
})

app.post('/welcome-customer', (req, res) => {
  console.log('Sending Welcome Email')
  const newCustomer = req.body.event.data.new
  console.log(`Welcome ${newCustomer.first_name} ${newCustomer.last_name} to Rent-A-Car!`)
  res.status(200).send({email: true})
})

app.post('/newsletter', (req, res) => {
  console.log('Sending Newsletter')
  const newCar = req.body.event.data.new
  console.log(`${newCar.make} ${newCar.model} is new in stock. Try it out!`)
  res.status(200).send({email: true})
})


let port = process.env.PORT
if (port == null || port == "") {
  port = 8000
}
app.listen(port, () => {
  console.log(`Hasura Example Webhook listening on port ${port}`)
})