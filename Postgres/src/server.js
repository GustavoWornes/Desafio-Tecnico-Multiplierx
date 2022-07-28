const express = require('express');
const { IntegracaoCategorias, IntegracaoProdutos } = require('../Cron');
const routes = require('./routes')
require('./database/index')
const app = express();
app.use(express.json());
app.use(routes);
app.listen(3001,() => console.log(`Example app listening on port ${3001}!`));

IntegracaoCategorias();
IntegracaoProdutos();


module.exports = app