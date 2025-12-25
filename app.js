// ================== IMPORTS ==================
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const Employee = require("./models/employee");

// ================== APP INIT ==================
const app = express();

// ================== MIDDLEWARE ==================
app.use(cors());
app.use(bodyParser.json());

// ================== TEST ROUTE ==================
app.get("/", (req, res) => {
  res.send("Server Running!");
});

// ================== MONGODB CONNECT ==================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// ================== ATTRITION = YES ==================
app.get("/employees/attrition/yes", async (req, res) => {
  try {
    const employees = await Employee.find({
      Attrition: { $regex: /^yes$/i }
    });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ATTRITION = NO
app.get("/employees/attrition/no", async (req, res) => {
  try {
    const employees = await Employee.find({
      Attrition: "No"
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ATTRITION COUNTS
app.get("/employees/attrition/counts", async (req, res) => {
  try {
    const total = await Employee.countDocuments();
    const yesCount = await Employee.countDocuments({ Attrition: "Yes" });
    const noCount = await Employee.countDocuments({ Attrition: "No" });

    res.json({
      totalEmployees: total,
      attritionYes: yesCount,
      attritionNo: noCount
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// By department
app.get("/employees/attrition/by-department", async (req, res) => {
  try {
    const data = await Employee.aggregate([
      { $match: { Attrition: "Yes" } },
      {
        $group: {
          _id: "$Department",
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// by job role 
app.get("/employees/attrition/by-jobrole", async (req, res) => {
  try {
    const data = await Employee.aggregate([
      { $match: { Attrition: "Yes" } },
      {
        $group: {
          _id: "$JobRole",
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ================== GET ALL EMPLOYEES ==================
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ================== START SERVER ==================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});