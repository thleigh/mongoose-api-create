const mongoose = require('mongoose')

let arSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    upCloseDmg: {
        type: Number,
        required: true
    },
    farDmg: {
        type: Number,
        required: true
    },
    rpm: {
        type: Number,
        required: true
    },
    magSize: {
        type: Number,
        required: true
    },
    reloadTime: {
        type: String,
        required: true
    },
    adsSpeed: {
        type: String,
        required: true
    }
})

let smgSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    upCloseDmg: {
        type: Number,
        required: true
    },
    farDmg: {
        type: Number,
        required: true
    },
    rpm: {
        type: Number,
        required: true
    },
    magSize: {
        type: Number,
        required: true
    },
    reloadTime: {
        type: String,
        required: true
    },
    adsSpeed: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AssualtRifle', arSchema)
module.exports = mongoose.model('SMG', smgSchema)