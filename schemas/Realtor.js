const mongoose = require("mongoose");

const RealtorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bussinessName: {
    type: String,
    required: [true, "Business name is required"],
  },
  isActive: Boolean,
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],
  document: [],
});

module.exports = mongoose.model("Realtor", RealtorSchema);
