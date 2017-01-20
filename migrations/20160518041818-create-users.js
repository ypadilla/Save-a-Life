//Users migration which creates tables in the database.
"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('users');
  }
};
