import express from "express";
import { authenticate, register } from "../models/User";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email And Password are required!");
  }
  try {
    const user = await authenticate(email, password);
    let response = {};
    if (!user) {
      response = {
        isSuccess: false,
        data: "Invalid email/password"
      };
    } else {
      response = {
        isSuccess: true,
        data: user
      };
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/register", async (req, res, next) => {
  const { fullName, email, password, contact } = req.body;

  if (!fullName || !email || !password || !contact) {
    return res.status(400).send("Please Fill All required Input Fields");
  }
  try {
    const response = await register(fullName, email, password, contact);
    let status = "";

    if (response.isSuccess === true) {
      status = "200";
    } else {
      status = "500";
    }
    return res.status(status).json(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = router;
