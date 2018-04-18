const express = require('express')
const app = express()

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

//testing connection
app.listen(4001, () => console.log('API listening on post 4001'))

//COPS requests
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

//adding product details

const Product = sequelize.define('forsale', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phonenumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING

}, {
  tableName: 'forsale',
  timestamps: false
})

//get all products

app.get('/forsale', (req, res) => {
  Product.findAll({
    attributes: ['id', 'title', 'price', 'description', 'email', 'phonenumber']
  })
  .then(result => {
    res.send({
      forsale: result
    })
  })
  //return error if something went wrong
    .catch(err => {
    res.status(500).send({error: 'ERROR!!!1!1!'})
  })
})

app.post('/products', (req, res) => {
  const product = req.body
  console.log(product)

  Product.create(product).then(entity => {

    res.status(201).send(entity)
  })
})

//testing API connection
// Product.findById(1).then(forsale => console.log(JSON.stringify(forsale)))
