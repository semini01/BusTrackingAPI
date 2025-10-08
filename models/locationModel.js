import mongoose from "mongoose";

const { Schema } = mongoose;

const LocationSchema = new Schema(
  {
    busId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusModel",
      required: true,
    },
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TripModel", // link to your trip
      required: false,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    locationName: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["moving", "stopped"],
      default: "moving",
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("LocationModel", LocationSchema);
