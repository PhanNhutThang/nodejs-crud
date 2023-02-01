const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nhutthangtestnodejs', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established succesfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
pool.getConnection((err, conn) => {
    if (err) console.log(err)
    console.log("Connected successfully")
})

module.exports = connectDB, pool.promise()

// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// pool.getConnection((err, conn) => {
//     if (err) console.log(err)
//     console.log("Connected successfully")
// })

// module.exports = pool.promise()