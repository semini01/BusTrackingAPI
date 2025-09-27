import LocationModel from "../models/locationModel.js";

import BusModel from "../models/busModel.js";

export const saveLocation = async (req, res) => {
  try {
    const { busId, latitude, longitude, locationName, status } = req.body;
    const location = await LocationModel.findOneAndUpdate(
      { busId },
      {
        latitude,
        longitude,
        locationName,
        status,
        updatedAt: Date.now(),
      },
      { upsert: true, new: true }
    );
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Search buses on a given route
 */
export const searchBusesByRoute = async (req, res) => {
  try {
    const { route } = req.query;

    // Find buses matching the route (assumes BusModel has a 'route' field)
    const buses = await BusModel.find({ route });

    if (!buses.length) {
      return res.status(404).json({ message: "No buses found on this route" });
    }

    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get the current location of a specific bus
 */
export const getCurrentBusLocation = async (req, res) => {
  try {
    const { busId } = req.params;

    // Find the latest location update by updatedAt field for the bus
    const location = await LocationModel.findOne({ busId })
      .sort({ updatedAt: -1 }) // Latest first
      .lean();

    if (!location) {
      return res
        .status(404)
        .json({ message: "No location found for this bus" });
    }

    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
