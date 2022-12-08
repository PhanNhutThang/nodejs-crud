'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Services', [{
            //email: 'nhut@gmail.com',
            serviceName: 'Vệ sinh sofa',
            introduce: 'abc',
            unitPrice: '1200000',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    // serviceName: DataTypes.STRING,
    // introduce: DataTypes.STRING,
    // unitPrice: DataTypes.FLOAT,
    // image: DataTypes.STRING
    down: async (queryInterface, Sequelize) => {

    }
};
