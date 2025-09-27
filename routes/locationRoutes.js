import express from "express";
import {
  saveLocation,
  searchBusesByRoute,
  getCurrentBusLocation,
} from "../controllers/location.controller.js";

const router = express.Router();
// Route to search buses by route name or number
router.post("/savebuses", saveLocation);

// Route to search buses by route name or number
router.get("/buses", searchBusesByRoute);

// Route to get current location of a selected bus by busId
router.get("/location/:busId", getCurrentBusLocation);

export default router;
