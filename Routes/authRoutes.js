const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../Controller/authController");
const authMiddelware = require("../Middleware/authMiddleware");
const router = express.Router();

//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;
