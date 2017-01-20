"use strict";

module.exports = function(sequelize, DataTypes) {
  var Chat = sequelize.define("Chat", {
    name: DataTypes.STRING,
    active: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {

    underscored: true,


    freezeTableName: true,

    tableName: 'chats',

    classMethods: {
      associate: function(models) {
        Chat.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });

  return Chat;
};
