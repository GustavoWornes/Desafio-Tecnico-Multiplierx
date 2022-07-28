const { Model,DataTypes }= require('sequelize');


class Produto extends Model {
    static init(sequelize){
        super.init({
            nome:DataTypes.STRING,
            idCategoria:DataTypes.INTEGER,
            status:DataTypes.INTEGER,
            codigo:DataTypes.STRING,
            descricao:DataTypes.TEXT,
            valor:DataTypes.DECIMAL
        },{
            sequelize,
            tableName:'produto'
        }
            
        )
    }
}


module.exports = Produto;