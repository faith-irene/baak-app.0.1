import { Sequelize } from "sequelize";
const database = new Sequelize('baak_system','gabin','qwerty007',{
    dialect : "mysql",
    host : "localhost"
});

export default database;

// import mysql from "mysql2/promise";

// const pool = mysql.createPool({
//     host : 'localhost',
//     user : 'gabin',
//     password : 'qwerty007',
//     database : 'baak_system'
// });

// export const sql =async (params:type) => {
    
// }