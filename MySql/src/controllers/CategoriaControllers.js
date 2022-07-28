const Categoria = require('../models/Categoria')

module.exports = {
    async newCategoria(req, res) {
        try {
            const { titulo, codigo, status } = req.body;
            const categoria = await Categoria.create({ titulo, codigo, status })
            return res.json(categoria);
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async getCategoriaId(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id)
            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async getAllCategorias(req, res) {
       try {
        const categoria = await Categoria.findAll();
        return res.status(200).json(categoria)
       } catch (error) {
        return res.status(400).json(error)
       }
    },

    async pathCategoria (req,res){
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            await categoria.update(req.body);
            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(400).json({error : error.message});
        }
    },

    async deleteCategoria(req,res){
        try {
            const retorno = await Categoria.findByPk(req.params.id);
            await retorno.destroy();
            return res.status(200).json({message:"usuario deletado com sucesso"})
        } catch (error) {
            return res.status(400).json({error : err.message})
        }
    }
    
};