const Estoque = require('../models/Estoque');

module.exports = {
    async getEstoque(req, res) {
        try {
            console.log(req.params.id)
            const estoque = await Estoque.findByPk(req.params.id);
            return res.status(200).json(estoque)
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async patchEstoque(req,res){
        try {
            const estoque = await Estoque.findByPk(req.params.id);
            await estoque.update(req.body);
            return res.status(200).json(estoque)
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async deleteEstoque(req,res){
        try {
            const estoque = await Estoque.findByPk(req.params.id);
            await estoque.destroy();
            return res.status(200).json({message:"Produto deletado do estoque com sucesso"})
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}