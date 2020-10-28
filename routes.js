const express = require('express')

const router = express.Router()

const db = require('./db')

let currentOpponent = undefined

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
        res.render('dino-select', {landDinos})
    }) 
})

router.get('/fight/:id', (req, res) => {
    id = req.params.id
    db.getDino(id)
        .then(dino => {
            // res.send(dino)
            db.getDino(1)
            .then(opponent => {
                if (!currentOpponent) {
                    currentOpponent = opponent
                }
                res.render('fight', {dino, opponent: currentOpponent})
            })
            
        })
})

router.post('/fight/:id', (req, res) => {
    id = req.params.id
    currentOpponent.health -= 40
    res.redirect('/fight/' + id)
})

module.exports = router