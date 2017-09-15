'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem: DataTypes.STRING
  })

  Item.associate = function(models) {
    Item.hasMany(models.Supplieritem, {foreignKey: 'ItemId', sourceKey: 'id'});
  }

  return Item;
};
