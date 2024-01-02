const express = require("express");
const authMiddelware = require("../Middleware/authMiddleware");
const { bloodGroupDetailsContoller } = require("../Controller/analyticsController");


const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsContoller);

module.exports = router;