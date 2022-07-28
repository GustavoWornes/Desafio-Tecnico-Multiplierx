'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('estoque', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allownull:false
      },
      idProduto:{
        type:Sequelize.INTEGER,
        allownull:false,
        references:{model:'produto',key:'id'}
      },
      quantidade:{
        type:Sequelize.INTEGER,
        allownull:false
      },
      reserva:{
        type:Sequelize.INTEGER,
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
      await queryInterface.dropTable('estoque');
     
  }
};
