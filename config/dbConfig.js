import Sequelize from "sequelize";
//DB Connection
const sequelize = new Sequelize("cyse_database", "root", "nageshsairam1234", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
