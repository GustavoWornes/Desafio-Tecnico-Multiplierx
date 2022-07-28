const { Model,DataTypes }= require('sequelize');


class Estoque extends Model {
    static init(sequelize){
        super.init({
            quantidade:DataTypes.INTEGER,
            idProduto:DataTypes.INTEGER,
            status:DataTypes.INTEGER,
            reserva:DataTypes.INTEGER
        },{
            sequelize,
            tableName:'estoque'
        }
            
        )
    }
}


module.exports = Estoque;