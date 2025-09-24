import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

// Load env vars from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// routes here
app.use("/api/auth", authRoutes);

const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
