import express from "express";
import sequelize from "./utils/database";
import bodyParser from "body-parser";
import User from "./models/User";
import UserSeeder from "./Seeder/User";
import userController from "./controllers/UserController";

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const port = process.env.PORT || "8000";

app.use(userController);

sequelize
  .sync()
  .then(() => {
    console.log("sequlize started");
    app.listen(port);
  })
  .catch(error => console.log("error", error));
