import mongoose from "mongoose";

const { Schema } = mongoose;

const BusRoutesSchema = new Schema();

export default mongoose.model("BusRoutesModel", BusRoutesSchema);
