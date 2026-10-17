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
├── employee.html      # Employee dashboard, cab booking, and smart pickup point selector
├── driver.html        # Driver dashboard, trip execution, and passenger photo viewer
├── vendor.html        # Fleet and vendor vehicle management
├── css/
│   └── style.css      # Styling for layouts, tables, cards, and forms
├── js/
│   └── script.js      # LocalStorage initialization, Leaflet live maps, and Smart Pickup logic
└── README.md          # Project documentation
```

---

## 🎯 Smart Pickup Points & Coordination System
Passengers and drivers often struggle to find each other at crowded hubs like malls, colleges, hospitals, and busy markets. CabFlow solves this before the ride even begins:

1. **Nearby Smart Pickup Spot Recommendations**:
   - Curated designated pickup bays, entry porches, and taxi stands for high-density hubs (DLF CyberHub, Ambience Mall, Medanta Hospital, Amity University, Sector 29 Market, Delhi Airport T3, and Sector 57).
   - Recommends the optimal bay with walking time and distance.
2. **Recognizable Landmarks & Step-by-Step Walking Directions**:
   - Clear visual landmark descriptions (e.g., *"Beside Starbucks outdoor seating, Pillar D-3 under yellow CabFlow canopy"*).
   - Step-by-step walking guides showing passengers how to navigate from building exits to the sheltered curb.
3. **Passenger Pickup Photo Sharing with Driver**:
   - Passengers can upload a photo of where they are waiting or select quick landmark photo presets.
   - Drivers can view the photo directly on their dashboard and open a high-res lightbox modal to spot the passenger immediately.
4. **Road Accessibility & Inaccessibility Warning**:
   - Automatically detects if the passenger drops a pin inside pedestrian plazas, internal courtyards, or > 50m away from drivable roads.
   - Displays a prominent amber/red alert: *"⚠️ Selected pin is ~110m inside a pedestrian zone. Cabs cannot legally enter here."*
   - Includes a 1-click **"✨ Snap to Recommended Pickup Bay"** button to ensure legal and swift pickups.
5. **Real-Time Driver Arrival Alerts**:
   - Drivers can click *"📢 I've Arrived at Pickup Bay"* to immediately notify the passenger in real time.