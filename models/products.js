const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING, // Ex: https://site.com/imagem.jpg
    allowNull: false
  }
}, {
  tableName: 'products'
});

module.exports = Product;
