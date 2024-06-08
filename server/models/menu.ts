import database from "../db/database";
import { DataTypes } from "sequelize";

const Menu = database.define("table_menu",{
    id : { 
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    menu : { type : DataTypes.STRING }
},{
    freezeTableName : true,
    timestamps : false
});

export default Menu;

