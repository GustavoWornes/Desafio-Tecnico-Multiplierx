const Estoque = require('../models/Estoque');
const Produto = require('../models/Produto')

module.exports ={
    async getProduto(req,res){
        try {
            const produto = await Produto.findAll();
            
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async getProdutoId(req,res){
        try {
            const produto = await Produto.findByPk(req.params.id)
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async postProduto(req,res){
        try {
            const produto = await Produto.create(req.body);
            console.log("esse é o id do produto: ",produto.id)
            const estoque = await Estoque.create({status:req.body.status,reserva:0,quantidade:0,idProduto:produto.id})
           
            return res.status(200).json(produto)
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async patchProduto(req,res){
        try {
            const produto = await Produto.findByPk(req.params.id)

            await produto.update(req.body);
            return res.status(200).json(produto)
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async deleteProduto(req,res){
        try {
            const produto = await Produto.findByPk(req.params.id);
            await produto.destroy();
            return res.status(200).json({message:"Produto deletado com sucesso"})
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}