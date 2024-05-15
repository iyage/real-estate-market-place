const mongoose = require("mongoose");
async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/real_estate_mkt_place_db?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;
