import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  city: String,
  state: String,
  pinCode: String,
  panNumber: String,
  aadharNumber: String,
  gstNumber: String,
});

const Store = mongoose.models.Store || mongoose.model("Store", StoreSchema);
export default Store;
