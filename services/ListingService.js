const Listing = require("../schemas/Listing");
const Realtor = require("../schemas/Realtor");

async function getAllListing() {
  console.log("fetching listings............");
  const listings = await Listing.find().populate("realtor");
  return listings;
}

async function addListingImage(imgUrl, id) {
  console.log("Adding image............");
  const listing = await Listing.findById(id);
  if (!listing) throw Error("User not found");
  listing.imgUrl.push(imgUrl);
  await listing.save();
  return listing;
}
async function addListingFeatures(features, id) {
  console.log("Adding image............");
  const listing = await Listing.findById(id);
  if (!listing) throw Error("User not found");
  listing.features = [...listing.features, ...features];
  await listing.save();
  return listing;
}
async function addListingCharges(charge, id) {
  console.log("Adding charges ............");
  const listing = await Listing.findById(id);
  if (!listing) throw Error("User not found");
  listing.otherCharges.push(charge);
  await listing.save();
  return listing;
}

async function addNewListing(payload, realtor_id) {
  const realtor = await Realtor.findById(realtor_id);
  if (!realtor) throw new Error("Realtor does not exist");
  payload.realtor = realtor?._id;
  const listing = await Listing.create({ ...payload });
  realtor?.listings.push(listing._id);
  await realtor?.save();
  return listing;
}
module.exports = {
  getAllListing,
  addListingImage,
  addNewListing,
  addListingFeatures,
  addListingCharges,
};
