
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('opponent').del()
    .then(function () {
      // Inserts seed entries
      return knex('opponent').insert([
        {
        "opponent_id": 5000,
        "name": "",
        "health": 0,
        "stamina": 0,
        "oxygen": 0,
        "melee_damage": 0,
        "movement_speed": 0,
        "swimming_speed": 0,
        "flying_speed": 0,
        "image": ""
        }
      ]);
    });
};
