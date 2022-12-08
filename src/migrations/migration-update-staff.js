module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Staffs', 'phone', {
                type: Sequelize.STRING,
                allowNull: true,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Staffs', 'phone', {
                type: Sequelize.INTEGER,
                allowNull: true,
            })
        ])
    }
}; 