import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load env vars from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running successfully 🚀");
});


// routes here

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
