const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/products', { useNewUrlParser: true },
 (err, database) => {
    if (err) return console.log(err)
    db = database.db('products')
    app.listen(process.env.PORT || 4000, () => {
      console.log('Listening on port 4000')
    })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// To resolve CORS error :
// https://medium.com/@ahsan.ayaz/how-to-handle-cors-in-an-angular2-and-node-express-applications-eb3de412abef
var originsWhitelist = ['http://localhost:4200'];

var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials: true
};

app.use(cors(corsOptions));

// Redirect to list
app.get('/', (req, res) => {
   res.redirect('/list');
})

// list all products
app.get('/list', (req, res) => {
  db.collection('products').find().toArray((err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// Add a product to the db
app.post('/add', (req, res) => {
  db.collection('products').insertOne(req.body, (err, result) => {
     if (err) throw err
  })
})

// Edit a product
app.post('/edit', (req, res) => {
  var query = { name: req.body.name }
  db.collection('products').replaceOne(query, req.body, (err, result) => {
     if (err) throw err
  })
})

// Find a product
app.post('/search', (req, res) => {
 var query = { name: req.body.name }
 db.collection('products').find(query).toArray(function(err, result) {
   if (err) throw err
   if (result == '')
       res.json({})
   else
       res.json(result[0])
 });
})

// Delete a product
//zelfde als = maar in typescript
app.delete('/:name', (req, res) => {
  db.collection('products').findOneAndDelete({name: req.params.name}, (err, result) => {
    if (err) throw err
  })
})
