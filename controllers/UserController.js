import express from "express";
import User from "../models/User";
import { authenticate, register } from "../models/User";

const router = express.Router();

router.get("/login", async (req, res, next) => {
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
        response: "Invalid email/password"
      };
    } else {
      response = {
        isSuccess: true,
        response: user
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
    if (response.status == "success") {
      return res.status(400).send(response.data);
    } else {
      return res.status(500).send(response.message);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = router;
