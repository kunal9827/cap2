# CabFlow - Corporate Cab Management System
This is my college capstone project for a **Corporate Cab Management System (CabFlow)**. 
The goal of this project is to provide a simple, working web prototype for managing daily employee cab travel in a company—connecting Admins, Cab Vendors, Drivers, and Employees without unnecessary complexity.
-----
## 📌 Project Overview
In corporate offices, arranging daily employee pickups and drops involves managing contracts with travel vendors, tracking available vehicles, and scheduling rides. 
CabFlow is designed to handle this workflow through simple role-based dashboards:
- **Admin**: Views daily travel stats, monitors recent bookings, and signs/records contracts with cab vendors.
- **Vendor**: Manages fleet vehicles and cab availability.
- **Employee**: Books cabs with advance notice rules.
- **Driver**: Views assigned daily trips and updates ride status.
*(Currently, the Login page and Admin Dashboard are completed and uploaded, with the remaining modules being integrated).*
---
## 🛠️ Tech Stack
I kept the stack completely vanilla and lightweight so it's easy to run, understand, and explain during project viva:
- **Frontend**: HTML5, CSS3
- **Scripting & Logic**: Plain Vanilla JavaScript (DOM manipulation, event listeners)
- **Data Storage**: Browser `localStorage` (used as a client-side mock database so data persists across pages without needing a complex backend setup)
---
## 📁 Folder Structure
```text
CabFlow/
├── index.html         # Login page with role selection & demo accounts
├── admin.html         # Admin dashboard and contract creation
├── css/
│   └── style.css      # Styling for layouts, tables, cards, and forms
├── js/
│   └── script.js      # LocalStorage initialization and helper functions
└── README.md          # Project documentation