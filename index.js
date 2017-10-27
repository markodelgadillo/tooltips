const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
app.use(express.static('./public'))

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const tooltip = db.collection('tooltip')

  app.get('/tooltip', function(req, res) {
    console.log('Getting stuff...')
    tooltip
      .find({}, { _id: 0 })
      .toArray()
      .then(response => res.json(response[0].content))
  })

  app.listen(9999, function() {
    console.log('Listening on port 9999.')
  })
})
