import mongoose from "mongoose";

const { Schema } = mongoose;

const BusSchema = new Schema(
  {
    busName: {
      type: String,
      required: true,
    },
    busRegNo: {
      type: String,
      required: true,
      unique: true,
    },
    driverName: {
      type: String,
      required: true,
    },
    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusRouteModel", // Reference to BusRoute schema
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("BusModel", BusSchema);
