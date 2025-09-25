import BusModel from "../models/busModel.js";

// Create a new bus
export const createBus = async (req, res) => {
  try {
    const { busName, busRegNo, route, user } = req.body;

    // Check if busRegNo already exists
    const existingBus = await BusModel.findOne({ busRegNo });
    if (existingBus) {
      return res
        .status(409)
        .json({ message: "Bus registration number already exists" });
    }

    const newBus = new BusModel({
      busName,
      busRegNo,
      route,
      user,
    });

    await newBus.save();
    res.status(201).json(newBus);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all buses
export const getAllBuses = async (req, res) => {
  try {
    const buses = await BusModel.find().populate("route").populate("user");
    res.json(buses);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get bus by ID
export const getBusById = async (req, res) => {
  try {
    const bus = await BusModel.findById(req.params.id)
      .populate("route")
      .populate("user");
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    res.json(bus);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
