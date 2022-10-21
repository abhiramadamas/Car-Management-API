'use strict';
const bcrypt = require('bcrypt');

//to run seed delete type:module in package.json
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name:"testing",
        email:"testing@gmail.com",
        password: await bcrypt.hash("123456", 10), //setup with bcrypt encryption
        role:"superadmin",
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
