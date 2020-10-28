
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('land_dinos').del()
    .then(function () {
      // Inserts seed entries
      return knex('land_dinos').insert([
        {
          "id": 1,
          "name": "rex",
          "health": 1100,
          "stamina": 420,
          "oxygen": 150,
          "melee_damage": 62,
          "movement_speed": 736.5,
          "swimming_speed": 300,
          "flying_speed": 0,
          "image": "images/rex.png"
          }, {
          "id": 2,   
          "name": "spinosaurus",
          "health": 700,
          "stamina": 350,
          "oxygen": 650,
          "melee_damage": 40,
          "movement_speed": 1717.5,
          "swimming_speed": 1100,
          "flying_speed": 0,
          "image": "images/spinosaurus.png"
          }, {
          "id": 3,    
          "name": "direwolf",
          "health": 330,
          "stamina": 260,
          "oxygen": 150,
          "melee_damage": 40,
          "movement_speed": 1048.8,
          "swimming_speed": 300,
          "flying_speed": 0,
          "image": "images/direwolf.png"
          }
      ]);
    });
};
