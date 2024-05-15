const express = require("express");
const { getAllRealtors, addNewRealtor } = require("../services/realtorService");
var bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const realtorController = express.Router();

realtorController.get("/realtors", async (req, res) => {
  try {
    const realtors = await getAllRealtors();
    return res.status(200).send(realtors);
  } catch (error) {
    console.log(error);
    return res.status(400 | 500).json({
      message: error.message,
    });
  }
});
realtorController.post("/realtors", jsonParser, async (req, res) => {
  try {
    const realtor = await addNewRealtor(req.body);
    res.status(200).send(realtor);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
});
module.exports = realtorController;
