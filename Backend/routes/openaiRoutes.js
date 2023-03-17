const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/openaiController");

router.post("/generateImage",generateImage);

module.exports = router;
