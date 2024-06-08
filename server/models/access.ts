import database from "../db/database";
import { DataTypes } from "sequelize";
import Menu from "./menu";
import Role from "./role";

const Access = database.define("table_access_menu",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    menu_id : {
        type : DataTypes.INTEGER,
        references : {
            model : Menu,
            key : 'id'
        }
    },
    role_id : {
        type : DataTypes.INTEGER,
        references : {
            model : Role,
            key : 'id'
        }
    }
},{
    freezeTableName : true,
    timestamps : false
});

// Role.belongsToMany(Menu,{
//     through : Access,
//     foreignKey : 'role_id'
// });

// Menu.belongsToMany(Role,{
//     through : Access,
//     foreignKey : 'submenu_id'
// });

export default Access;
