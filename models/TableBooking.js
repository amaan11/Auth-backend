import { Sequelize } from "sequelize";
import sequelize from "../utils/database";

const TableBooking = sequelize.define("table_booking", {
  restaurant_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: false,
    primaryKey: false
  },
  booking_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    autoIncrement: false,
    primaryKey: false
  },
  booking_time: {
    type: Sequelize.TIME,
    allowNull: false,
    autoIncrement: false,
    primaryKey: false
  },
  session_type: {
    type: Sequelize.ENUM,
    values: ["breakfast", "lunch", "dinner"],
    defaultValue: ["dinner"]
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
    autoIncrement: false,
    primaryKey: false
  },
  contact_number: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    autoIncrement: false,
    primaryKey: false
  }
});

const bookTable = async request => {
  const {
    restaurantId,
    bookingDate,
    bookingTime,
    sessionType,
    fullName,
    contact
  } = request;

  let response = {};

  await TableBooking.create({
    restaurant_id: restaurantId,
    booking_date: bookingDate,
    booking_time: bookingTime,
    session_type: sessionType,
    full_name: fullName,
    contact_number: contact
  })
    .then(res => {
      response["isSuccess"] = true;
      response["data"] = res;
    })
    .catch(error => {
      response["isSuccess"] = false;
      response["data"] = error;
    });
  return response;
};

export { TableBooking, bookTable };
