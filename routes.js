const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
    res.redirect('/home')
})

router.get('/home', (req, res) => {
    res.render('home')
})

router.get('/dino-select', (req, res) => {
    db.listDinos()
    .then(landDinos => {
        // res.send(landDinos)
        res.render('dino-select', landDinos)
    }) 
})

router.get('/fight/:id', (req, res) => {
    id = req.params.id
    db.getDino(id)
        .then(dino => {
            // res.send(dino)
            res.render('fight', dino)
        })
})

router.post('/fight/:id', (req, res) => {
    id = req.params.id
    db.attackDino(id)
    .then (health => {
        res.render('fight', health)
    })
})

module.exports = router