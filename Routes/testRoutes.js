const express = require("express");
const { testController } = require("../Controller/testController");

const router = express.Router();

router.get("/", testController);

module.exports = router;
