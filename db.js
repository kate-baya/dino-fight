const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

function listDinos(db = database){
    return db('land_dinos').select("name")
}

function getDino(id, db = database) {
    return db('land_dinos')
    .where("id", id)
    .first()
}

// function attackDino(id, db = database) {
//     return db('land_dinos')
//     .where("id", id)
//     .select("melee_damage", "health")
//     if ()
//     .update("health")
// }


module.exports = {
    listDinos: listDinos,
    getDino:getDino
}