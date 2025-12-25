const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  Age: Number,
  Gender: String,
  Department: String,
  JobRole: String,
  MonthlyIncome: Number,
  YearsAtCompany: Number,
  Attrition: String
}, {
  collection: "employees"   // VERY IMPORTANT
});

module.exports = mongoose.model("Employee", employeeSchema);