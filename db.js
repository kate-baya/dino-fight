const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

function listDinos(db = database){
    return db('land_dinos').select("name", "id")
}

function getDino(id, db = database) {
    return db('land_dinos')
    .where("id", id)
    .first()
}

const opponentAttack = function() {
    return currentUser.health = currentUser.health - currentOpponent.melee_damage
}

function getRandomDino(db = database) {
    let randomDinoId = Math.floor(Math.random() * 3) + 1
    return getDino(randomDinoId)
}

module.exports = {
    listDinos: listDinos,
    getDino:getDino,
    getRandomDino: getRandomDino,
    opponentAttack: opponentAttack
}