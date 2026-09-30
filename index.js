require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const connectDB = require("./src/utils/db");

const app = express();


// Create uploads folder if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}


// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);


// Routes
const materialRoutes = require("./src/routes/materials");
const authRoutes = require("./src/routes/auth");
const adminRoutes = require("./src/routes/admin");

app.use("/api/materials", materialRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});


// Start server only after MongoDB connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();