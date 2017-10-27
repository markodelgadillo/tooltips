const { MongoClient } = require('mongodb')

const seed = (module.exports = MongoClient.connect(
  'mongodb://localhost/library',
  function(err, db) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    const tooltip = db.collection('tooltip')

    tooltip.deleteMany()

    tooltip.insertMany([
      {
        id: '1',
        content: 'This is a tooltip.'
      }
    ])
    db.close()
  }
))
