import { Sequelize } from "sequelize";
import sequelize from "../utils/database";

const User = sequelize.define("users", {
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: false,
    autoIncrement: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: false,
    autoIncrement: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: false,
    autoIncrement: false
  },
  contact: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    primaryKey: false,
    autoIncrement: false
  }
});

const authenticate = async (email, password) => {
  const user = await User.findOne({
    where: {
      email: email,
      password: password
    }
  });
  return user;
};
const register = async (fullname, email, password, contact) => {
  let response = {};
  await User.create({
    full_name: fullname,
    email: email,
    password: password,
    contact: contact
  })
    .then(res => {
      response["isSuccess"] = true;
      response["data"] = res;
    })
    .catch(error => {
      response["isSuccess"] = true;
      response["data"] = error;
    });

  return response;
};

export { User, authenticate, register };
