'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('categoria', { 
        id:{
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allownull:false
        },
        codigo:{
          type:Sequelize.STRING,
          allownull:false,
          unique:true
        },
        titulo:{
          type:Sequelize.STRING,
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
     await queryInterface.dropTable('categoria');
     
  }
};
