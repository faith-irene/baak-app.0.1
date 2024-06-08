import database from "../db/database";
import { DataTypes } from "sequelize";

const Role = database.define("table_role",{
    id : { type : DataTypes.INTEGER, primaryKey : true },
    role : { type : DataTypes.STRING, allowNull : false }
},{
    freezeTableName : true,
    timestamps : false
});

export default Role;

