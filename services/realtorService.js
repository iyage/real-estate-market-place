const Realtor = require("../schemas/Realtor");

async function getAllRealtors() {
  const realtors = await Realtor.find().populate("listings");
  return realtors;
}

async function addNewRealtor(payload) {
  console.log(payload);
  const existingRealtor = await Realtor.findOne({ email: payload?.email });
  console.log(existingRealtor);
  if (existingRealtor !== null)
    throw new Error(
      "Realtor with the email address " + payload.email + " exist before"
    );
  const realtor = await Realtor.create({ ...payload });
  return realtor;
}
module.exports = {
  getAllRealtors,
  addNewRealtor,
};
