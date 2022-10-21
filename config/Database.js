import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_cars', 'postgres', 'Barcelona10', {
    host: "localhost",
    dialect: "postgres"
});
 
export default db;