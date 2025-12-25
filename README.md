# Employee Attrition Prediction System

A full-stack **Employee Attrition Analysis & Prediction** project built using **Node.js**, **Express.js**, **MongoDB**, and a simple **HTML/CSS/JavaScript frontend dashboard**.  
This project helps analyze employee attrition trends and provides insights through REST APIs and an interactive UI.

---

## 🚀 Project Overview

Employee attrition is a critical problem for organizations.  
This project analyzes employee data and answers questions like:

- Who is likely to leave the organization?
- Who is likely to stay?
- Attrition distribution by **Job Role**
- Attrition distribution by **Department**
- Count and percentage-based insights

The project demonstrates **backend development**, **database handling**, and **frontend-backend integration**.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Frontend:** HTML, CSS, JavaScript  
- **API Communication:** Fetch API  
- **Tools:** VS Code, GitHub  

---

## 📂 Project Structure
employee-attrition-prediction/
│
├── backend/
│   ├── app.js                  # Main server file
│   ├── .env                    # Environment variables (NOT pushed to GitHub)
│   ├── models/
│   │   └── Employee.js         # Mongoose schema & model
│
├── frontend/
│   └── index.html              # Dashboard UI (HTML + CSS + JS)
│
├── README.md                   # Project documentation
└── package.json
---

## 🔗 API Endpoints

| Endpoint | Description |
|--------|------------|
| `/employees` | Fetch all employee records |
| `/employees/attrition/yes` | Employees with Attrition = Yes |
| `/employees/attrition/no` | Employees with Attrition = No |
| `/employees/attrition/jobrole` | Attrition grouped by Job Role |
| `/employees/attrition/department` | Attrition grouped by Department |

---

## 🖥️ Frontend Dashboard

The frontend dashboard provides:
- **4 Buttons**
  - Attrition YES
  - Attrition NO
  - By Job Role
  - By Department
- Data is fetched dynamically using **Fetch API**
- JSON data is displayed using `JSON.stringify()` for clarity

---

## ▶️ How to Run the Project (Local Setup)

### 1️⃣ Start MongoDB
Make sure MongoDB service is running.

### 2️⃣ Backend Setup
### 3️⃣ Frontend
Open:in your browser and click buttons to view data.

---

## 📌 Environment Variables

Create a `.env` file (not pushed to GitHub):
---

## 🎯 Key Learnings

- REST API development using Express
- MongoDB schema design and querying
- Handling real-world CSV-based datasets
- Frontend-backend integration
- Fetch API usage
- Full-stack project structuring
- GitHub project documentation

---

## 👤 Author

**kanchi Swaroop**  
GitHub: https://github.com/Swaroopkanchi

---
