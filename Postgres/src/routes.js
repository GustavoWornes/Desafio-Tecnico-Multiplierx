const express = require('express');
const CategoriaController=require('./controllers/CategoriaControllers');
const EstoqueControllers = require('./controllers/EstoqueControllers');
const ProdutoController = require('./controllers/ProdutoController');
const routes = express.Router()
routes.get('/c/:codigo',CategoriaController.teste)
routes.post('/categorias',CategoriaController.newCategoria);
routes.get('/categorias/:id',CategoriaController.getCategoriaId);
routes.get('/categorias',CategoriaController.getAllCategorias);
routes.patch('/categorias/:id',CategoriaController.pathCategoria);
routes.delete('/categorias/:id',CategoriaController.deleteCategoria)

routes.get('/p/:codigo',ProdutoController.getProdutoCodigo)
routes.get('/produtos',ProdutoController.getProduto);
routes.get('/produtos/:id',ProdutoController.getProdutoId);
routes.post('/produtos',ProdutoController.postProduto)
routes.patch('/produtos/:id',ProdutoController.patchProduto)
routes.delete('/produtos/:id',ProdutoController.deleteProduto)

routes.get('/produtos/:id/estoque',EstoqueControllers.getEstoque);
routes.patch('/produtos/:id/estoque',EstoqueControllers.patchEstoque);
routes.delete('/produtos/:id/estoque',EstoqueControllers.deleteEstoque);

module.exports= routes;