'use strict';
module.exports = function(sequelize, DataTypes) {
  var Suuplieritem = sequelize.define('Supplieritem', {
    SupplierId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  })
  Supplieritem.associate = (models) => {
    Supplieritem.belongsTo(models.Supplier,{foreignKey: 'SupplierId'})
    Supplieritem.belongsTo(models.Item,{foreignKey: 'ItemId'})
  }
  return Suuplieritem;
};
