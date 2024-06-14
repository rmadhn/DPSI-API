const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Product = require("./product");
const Order = require("./order");
const OrderDetail = sequelize.define("OrderDetail", {
  orderDetailID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: "orderID",
    },
  },
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "productID",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
// Definisikan relasi
Product.hasMany(OrderDetail, { foreignKey: "productID" });
OrderDetail.belongsTo(Product, { foreignKey: "productID" });

Order.hasMany(OrderDetail, { foreignKey: "orderID" });
OrderDetail.belongsTo(Order, { foreignKey: "orderID" });

module.exports = OrderDetail;
