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

router.get('/:id', (req, res) => {
    db.AssaultRifle.findById(req.params.id)
    .then(foundWeapon=>{
        if(foundWeapon){
            res.send(foundWeapon)
        } else {
            res.status(404).send({message: 'Resource not located.'})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Service Unavailable'})
    })
})

router.put('/:id', (req, res) => {
    db.AssaultRifle.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedWeapon=>{
        res.send(updatedWeapon)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
})

router.delete('/:id', (req, res) => {
    db.AssaultRifle.findByIdAndDelete(req.params.id)
    .then(()=> {
        res.status(204).send()
    })
    .catch(err => {
        console.log(err)
        res.send(503).send({message: 'Server Error'})
    })
})

module.exports = router