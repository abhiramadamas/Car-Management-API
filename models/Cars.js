import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Cars = db.define('cars',{
    nama: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    sewa: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    ukuran: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Cars;