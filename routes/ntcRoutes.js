import express from "express";
import {
  createBusRoute,
  getAllBusRoutes,
  getBusRouteByPoints,
  updateBusRouteByPoints,
  deleteBusRouteByPoints,
} from "../controllers/ntcController.js";

import authMiddleware from "../utils/authMiddleware.js"; // Adjust path as needed

const router = express.Router();

// Protected routes – require valid JWT token

router.post("/routes", authMiddleware, createBusRoute);
router.get("/routes", authMiddleware, getAllBusRoutes);
router.get("/routes-by-points", authMiddleware, getBusRouteByPoints);
router.put(
  "/routes/:startPoint/:endPoint",
  authMiddleware,
  updateBusRouteByPoints
);
router.delete(
  "/routes/:startPoint/:endPoint",
  authMiddleware,
  deleteBusRouteByPoints
);

export default router;
