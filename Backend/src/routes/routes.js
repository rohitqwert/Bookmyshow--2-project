const express = require("express");
const router = express.Router();

const postBooking = require("../controllers/postBooking");
const getLastBooking = require("../controllers/getLastBooking");

router.post("/booking",postBooking);
router.get("/booking",getLastBooking);

module.exports = router;