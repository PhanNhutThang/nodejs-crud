// const { Sequelize } = require('sequelize');
// const mysql = require('mysql2')
// const sequelize = new Sequelize('nhutthangtestnodejs', 'root', null, {
//     // host: 'localhost',
//     // dialect: 'mysql',
//     // logging: false
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     dialect: 'mysql',
//     logging: false,
//     queueLimit: 0
// });

// let connectDB = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established succesfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// module.exports = connectDB

/////////////////////////////////////////////////////////////////////////
const { Sequelize } = require('sequelize');
require('dotenv').config();


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        dialectOptions:
            process.env.DB_SSL === 'true' ?
                {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                } : {}
        ,
        query: {
            "raw": true
        },
        timezone: "+07:00"
    });

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB;
