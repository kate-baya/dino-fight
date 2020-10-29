const express = require('express')

const router = express.Router()

const db = require('./db')

//Global
let currentOpponent = undefined
let currentUser = undefined
let userTurn = true

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
            currentUser = dino
            db.getRandomDino()
            .then(opponent => {
                currentOpponent = opponent
                res.render('fight', {dino: currentUser, opponent: currentOpponent})
            })
            
        })
})

router.get('/fight', (req, res) => {
   
    res.render('fight', {dino: currentUser, opponent: currentOpponent})
})

router.post('/fight', (req, res) => {
    console.log("working")
    if (userTurn) {
        if (currentOpponent.health <= 0) {
            res.render('you-win')
        } 
            currentOpponent.health -= currentUser.melee_damage
            userTurn = !userTurn
        }
    res.redirect('/fight')
})

router.post('/opponent-fight', (req, res) => {
    if (userTurn = !userTurn) {
    currentUser.health -= currentOpponent.melee_damage
    userTurn = true
    }
    res.redirect('/fight')
})

module.exports = router