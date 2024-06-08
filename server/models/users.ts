import database from "../db/database";
import { DataTypes, Model, Optional } from "sequelize";

// const User = database.define("table_user",{
//     username : { 
//         type : DataTypes.STRING,
//         allowNull : false
//     },
//     password : { 
//         type : DataTypes.STRING,
//         allowNull : false
//     },
//     role_id :  { type : DataTypes.INTEGER },
//     fullname : { type : DataTypes.STRING },
//     status : { type : DataTypes.INTEGER }
// },{
//     freezeTableName : true,
//     timestamps : false
// });

// export default User;

interface UserAttributes {
    id : number,
    username : string,
    password : string,
    role_id : number,
    fullname : string,
    status : number
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}

class User extends Model<UserAttributes,UserCreationAttributes> implements UserAttributes {
    
    public id! : number;
    public username!: string; 
    public password!: string;
    public role_id!: number;
    public fullname!: string;
    public status!: number;
    
}

User.init({
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        autoIncrement : true,
        primaryKey : true
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    role_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    fullname : {
        type : DataTypes.STRING,
        allowNull : false
    },
    status : {
        type : DataTypes.INTEGER
    }
},{
    sequelize : database,
    tableName : 'table_user',
    freezeTableName : true,
    timestamps : false
});

export default User;