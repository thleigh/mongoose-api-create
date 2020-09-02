const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/modernWarfare', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.log(`Database error:\n${err}`)
})

module.exports.Weapons = require('./weapons')