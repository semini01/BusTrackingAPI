import express from "express";
import {
  createBusRoute,
  getAllBusRoutes,
  getBusRouteByPoints,
  updateBusRouteByPoints,
  deleteBusRouteByPoints,
} from "../controller/ntcController.js";

import { authMiddleware } from "../utils/authMiddleware.js";

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
