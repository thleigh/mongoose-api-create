//create router
const router = require('express').Router()

// import models
const db = require('../models')

router.get('/', (req, res) => {
    db.AssaultRifle.find()
    .then(foundWeapons => {
        res.send(foundWeapons)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'Database is sleeping zzzzz....'})
    })
})

router.post('/', (req, res) => {
    db.AssaultRifle.create(req.body)
    .then(createWeapon=> {
        res.status(201).send(createWeapon)
    })
    .catch(err => {
        if(err.name == 'ValidationError') {
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(504).send({message: 'Database or server error.'})
        }
    })
})



module.exports = router