import Sequelize from "sequelize";

const sequelize = new Sequelize({
  database: "food_application",
  username: "root",
  password: "goldtree9",
  dialect: "mysql"
});

export default sequelize;
