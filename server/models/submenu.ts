import database from "../db/database";
import { DataTypes } from "sequelize";
import Menu from "./menu";

const Submenu = database.define("table_submenu",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    submenu : { type : DataTypes.STRING, allowNull : false },
    menu_id : {
        type : DataTypes.INTEGER,
        references : {
            model : Menu,
            key : 'id'
        }
    }
},{
    freezeTableName : true,
    timestamps : false
});

Menu.hasMany(Submenu, {
    foreignKey : 'menu_id'
});

Submenu.belongsTo(Menu, {
    foreignKey : 'menu_id'
});

export default Submenu;