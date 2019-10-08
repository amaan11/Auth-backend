import express from "express";
import sequelize from "./utils/database";
import bodyParser from "body-parser";
import { TableBooking, User } from "./models";
import UserSeeder from "./Seeder/User";
import UserController from "./controllers/UserController";
import BookingController from "./controllers/BookingController";

import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

const port = process.env.PORT || "8000";

app.use(UserController);
app.use(BookingController);

sequelize
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch(error => console.log("error", error));
