import express from "express";
import { bookTable } from "../models/TableBooking";

const Router = express.Router();

Router.post("/book-table", async (req, res, next) => {
  const {
    restaurantId,
    bookingDate,
    bookingTime,
    sessionType,
    fullName,
    contact
  } = req.body;

  //Validate restaurant Id

  let response = {};
  let status = "";

  if (
    !restaurantId ||
    !bookingDate ||
    !bookingTime ||
    !sessionType ||
    !fullName ||
    !contact
  ) {
    response["isSuccess"] = false;
    response["data"] = "Missing Input!Please Provide all required inputs";
    return res.status(500).json(response);
  } else {
    try {
      const response = await bookTable(req.body);

      if (response.isSuccess === true) {
        status = "200";
      } else {
        status = "500";
      }
      return res.status(status).json(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
});

export default Router;
