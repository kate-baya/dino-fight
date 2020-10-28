
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
      table.increments("user_id")
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
  return knex.schema.dropTable('user')
};
