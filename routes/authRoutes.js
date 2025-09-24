import express from "express";
import { register, login, getMe } from "../controller/authController.js";
import { authMiddleware } from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getMe); // Protected route example

export default router;
