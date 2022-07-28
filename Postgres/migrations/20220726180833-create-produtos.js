'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allownull:false
      },
      idCategoria:{
        type:Sequelize.INTEGER,
        allownull:false,
        references:{ model: 'categoria',key:'id' },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      codigo:{
        type:Sequelize.STRING,
        allownull:false,
        unique:true
      },
      nome:{
        type:Sequelize.STRING,
        allownull:false
      },
      descricao:{
        type:Sequelize.TEXT,
        allownull:false
      },
      valor:{
        type:Sequelize.DECIMAL,
        allownull:false
      },
      status:{
        type:Sequelize.INTEGER,
        allownull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allownull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allownull:false
      }
    });
 
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('produto');
     
  }
};
