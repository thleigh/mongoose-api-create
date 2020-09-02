const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/modernWarfare', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection