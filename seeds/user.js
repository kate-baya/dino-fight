
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          "user_id": 1000,
          "user_name": "",
          "user_health": 0,
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
