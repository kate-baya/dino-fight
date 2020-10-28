
exports.up = function(knex) {
  return knex.schema.createTable('opponent', table => {
      table.increments("opponent_id")
      table.string("name"),
      table.integer("health"),
      table.integer("stamina"),
      table.integer("oxygen"),
      table.integer("melee_damage"),
      table.integer("movement_speed"),
      table.integer("swimming_speed"),
      table.integer("flying_speed"),
      table.string("image")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('opponent')
};
