exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("cars")
      .truncate() // resets the id (primary key) back to 1
      .then(function() {
          // Inserts seed entries
        return knex("cars").insert([
          {
            VIN: '12345qwert',
            make: 'Ford',
            model: 'Fusion',
            mileage: 23000,
            automatic: true,
            titleStatus: 'clean'
          },
          {
            VIN: 'qjle545tsd',
            make: 'Mazda',
            model: 'RX-8',
            mileage: 123000,
            automatic: false,
            titleStatus: 'clean'
          },
          {
            VIN: '5322oiphjw',
            make: 'Volkswagen',
            model: 'Passat',
            mileage: 232000,
            automatic: true,
            titleStatus: 'salvage'
          },
        ]);
      })
  );
};
