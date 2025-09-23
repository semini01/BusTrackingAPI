import mongoose from "mongoose";

const { Schema } = mongoose;

const BusSchema = new Schema();

export default mongoose.model("BusModel", BusSchema);
