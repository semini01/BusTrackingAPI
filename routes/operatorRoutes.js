import express from "express";
import {
  createBus,
  getAllBuses,
  getBusById,
  updateBusById,
  deleteBusById,
  getBusByRegNo,
  updateBusByRegNo,
  deleteBusByRegNo,
} from "../controller/operatorController.js";

import { authMiddleware } from "../utils/authMiddleware.js";

const router = express.Router();

// Create a new bus
router.post("/buses", authMiddleware, createBus);

// Get all buses
router.get("/buses", authMiddleware, getAllBuses);

// Get bus by MongoDB ID
router.get("/buses/:id", authMiddleware, getBusById);

// Update bus by MongoDB ID
router.put("/buses/:id", authMiddleware, updateBusById);

// Delete bus by MongoDB ID
router.delete("/buses/:id", authMiddleware, deleteBusById);

// Get bus by registration number
router.get("/bus/by-regno/:busRegNo", authMiddleware, getBusByRegNo);

// Update bus by registration number
router.put("/bus/by-regno/:busRegNo", authMiddleware, updateBusByRegNo);

// Delete bus by registration number
router.delete("/bus/by-regno/:busRegNo", authMiddleware, deleteBusByRegNo);

export default router;
