exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string("VIN").index();

    tbl.integer("mileage");

    tbl.string("make").index();

    tbl.string("model").index();

    tbl.boolean("automatic").defaultTo(false)

    tbl.string("titleStatus").index()

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
