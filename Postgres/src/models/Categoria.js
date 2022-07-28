const { Model,DataTypes }= require('sequelize');


class Categoria extends Model {
    static init(sequelize){
        super.init({
            titulo:DataTypes.STRING,
            status:DataTypes.INTEGER,
            codigo:DataTypes.STRING
        },{
            sequelize,
            tableName:'categoria'
        }
            
        )
    }
}


module.exports = Categoria;