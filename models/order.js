const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Shipper = require("./shipper");
const Customer = require("./customer");
const Employee = require("./employee");
const Order = sequelize.define("Order", {
  orderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customer,
      key: "customerID",
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employeeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Employee,
      key: "employeeID",
    },
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  shipperID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shipper,
      key: "shipperID",
    },
  },
});

// Relasi antara model
Shipper.hasMany(Order, { foreignKey: "shipperID" });
Order.belongsTo(Shipper, { foreignKey: "shipperID" });

Employee.hasMany(Order, { foreignKey: "employeeID" });
Order.belongsTo(Employee, { foreignKey: "employeeID" });

Customer.hasMany(Order, { foreignKey: "customerID" });
Order.belongsTo(Customer, { foreignKey: "customerID" });

module.exports = Order;
