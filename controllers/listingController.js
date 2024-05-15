const express = require("express");
var bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const {
  getAllListing,
  addListingImage,
  addNewListing,
  addListingFeatures,
  addListingCharges,
} = require("../services/ListingService");
const listingController = express.Router();

listingController.get("/listings", async (req, res) => {
  try {
    const listings = await getAllListing();
    return res.send(listings);
  } catch (error) {
    console.log("error");
    return res.json({ message: error.message });
  }
});
listingController.put("/listings/:id/img", jsonParser, async (req, res) => {
  try {
    const listing_id = req.params["id"];
    const payload = req.body;
    const imgUrl = payload.imgUrl;
    console.log(imgUrl);
    const listing = await addListingImage(imgUrl, listing_id);
    return res.status(200).send(listing);
  } catch (error) {
    console.log(error);
    res.status(400 | 500).send({
      message: error.message,
    });
  }
});

listingController.put(
  "/listings/:id/features",
  jsonParser,
  async (req, res) => {
    try {
      const listing_id = req.params["id"];
      const payload = req.body;
      const features = payload.features;
      const listing = await addListingFeatures(features, listing_id);
      return res.status(200).send(listing);
    } catch (error) {
      console.log(error);
      res.status(400 | 500).send({
        message: error.message,
      });
    }
  }
);

listingController.put(
  "/listings/:id/other-charges",
  jsonParser,
  async (req, res) => {
    try {
      const listing_id = req.params["id"];
      const payload = req.body;
      const listing = await addListingCharges(payload, listing_id);
      return res.status(200).send(listing);
    } catch (error) {
      console.log(error);
      res.status(400 | 500).send({
        message: error.message,
      });
    }
  }
);

listingController.post(
  "/listings/realtor/:id",
  jsonParser,
  async (req, res) => {
    try {
      const realtor_id = req.params["id"];
      const payload = req.body;
      const listing = await addNewListing(payload, realtor_id);
      return res.status(200).send(listing);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        message: error.message,
      });
    }
  }
);

module.exports = listingController;
