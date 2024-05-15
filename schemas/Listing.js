const mongoose = require("mongoose");
const ListingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "Property address is required"],
  },
  nearestBusStop: {
    type: String,
    required: [true, "Property address is required"],
  },
  state: {
    type: String,
    required: [true, "Property address is required"],
  },
  lga: {
    type: String,
    required: [true, "Property address is required"],
  },
  description: {
    type: String,
  },
  landmark: {
    type: [String],
  },
  rate: {
    type: Number,
    required: [true, "Property address is required"],
  },
  otherCharges: [
    {
      name: String,
      rate: Number,
    },
  ],
  imgUrl: [String],
  features: [String],
  realtor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Realtor",
  },
});
module.exports = mongoose.model("Listing", ListingSchema);
