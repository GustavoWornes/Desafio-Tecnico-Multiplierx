const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Categoria = require('../models/Categoria');
const Estoque = require('../models/Estoque');
const Produto = require ('../models/Produto')


const connection = new Sequelize(dbConfig)
Categoria.init(connection);
Produto.init(connection);
Estoque.init(connection);


module.exports = connection;