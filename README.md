   # Healthcare WebApp


<a href="https://health-care-website-demo.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src="https://i.ibb.co/B2DdGkgF/Screenshot-2025-05-23-at-3-31-31-PM.png" alt="healthcare webapp" />
</a>

A modern React-based healthcare web application powered by Vite for fast development and optimized builds.

---

## Project Overview

This project is a healthcare web application built using React and Vite. It leverages various UI icon libraries and Mobiscroll components for a rich user experience.

---

## Technologies Used

- **React** v19.1.0  
- **Vite** v6.3.5 (build tool and dev server)  
- **Mobiscroll React** (trial version for UI components)  
- **Lucide React** (icon library)  
- **HugeIcons React** (icon library)  
- **ESLint** with React hooks plugin for code linting and quality  

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v16 or higher recommended)
- npm (comes with Node.js) or yarn
- Vite v6.3.5 (build tool and dev server)  
- Mobiscroll React (trial version for UI components)  
- Lucide React (icon library)  
- HugeIcons React (icon library)  
- ESLint with React hooks plugin for code linting and quality  
---


## Project Structure

-src/
- components/ # React UI components (Header, Sidebar, Dashboard)
- data/ # Static data, mock data
- styles/ #  styling files for the application
- App.jsx # Root React component
- main.jsx # Application entry point
- vite.config.js # Vite configuration file

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ramesh043/healthcare-webapp.git
   cd healthcare-webapp


### Main Files
# App Component
```jsx
import React from "react";
import Header from "./components/Header";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

function App() {
  return (
    <div className="app-container">
      <div className="parent-container">
        <div className="">
          <Header />
        </div>
        <div className="app-second-content">
          <div className="sidebar-content">
            <Sidebar />
          </div>

          <div className="app-main-dashboard">
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```
```jsx
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: whitesmoke;
  overflow-y: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
```


# main file
```jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```




### Component Code Structure
```jsx
// src/components/ActivityFeed.jsx

import React from "react";
import "../styles/Activity.css";
import activityData from "../data/activityData";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className="activity-title">Activity</h3>
        <p className="activity-subtitle">3 appointments this week</p>
      </div>

      <div className="bar-chart-with-labels">
        <div className="bar-chart">
          {activityData.map((height, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>

        <div className="day-labels">
          {days.map((day, index) => (
            <div className="day-label" key={index}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
```


```jsx

import React from "react";
import humanBody from "../assets/images/humanbody.png";
import ActivityFeed from "./ActivityFeed";

import HealthCard from "./HealthCard";

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={humanBody} alt="" height={340} />
        <HealthCard />
      </div>
      <div className="" style={{ width: "500px" }}>
        <ActivityFeed />
      </div>
    </div>
  );
}

export default AnatomySection;
```


```jsx

import { Eventcalendar, getJson, setOptions, Toast } from "@mobiscroll/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import "../styles/Calender.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
setOptions({
  theme: "ios",
  themeVariant: "light",
});

function CalendarView() {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventClick = useCallback((args) => {
    setToastText(args.event.title);
    setToastOpen(true);
  }, []);

  const myView = useMemo(() => ({ calendar: { labels: true } }), []);

  useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);

  return (
    <>
      <div className="calender-content">
        <Eventcalendar
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          eventDelete={false}
          data={myEvents}
          view={myView}
          onEventClick={handleEventClick}
        />
        <Toast
          message={toastText}
          isOpen={isToastOpen}
          onClose={handleToastClose}
        />
      </div>
    </>
  );
}

export default CalendarView;

```
```jsx
import React from "react";
import AnatomySection from "./AnatomySection";
import HealthCard from "./HealthCard";

import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import "../styles/DashboardMainContent.css";
function DashboardMainContent() {
  return (
    <>
      <div className="dashboard-option">
        <h2>DashBoard</h2>
        <select>
          <option>This Week</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <div className="dashboard">
        <div className="anatomySection-content">
          <AnatomySection />
        </div>
        <div className="calender-content">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
}

export default DashboardMainContent;
```



```jsx

import { Bell, Plus, Search } from "lucide-react";
import React from "react";
import headerData from "../data/headerData";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo">
          <h1>
            {headerData.appName.split("Care")[0]}
            <span>Care.</span>
          </h1>
        </div>

        <div className="search-container">
          <Search className="search-icon" />
          <input type="search" placeholder={headerData.searchPlaceholder} />
          <Bell
            color={headerData.bellColor}
            className="bell-icon"
            fill={headerData.bellColor}
          />
        </div>

        <div className="right-icon">
          <img
            src={headerData.profileImage}
            alt="profile"
            className="profile-pic"
          />
          <Plus className="plus-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;


```


```jsx

import React from "react";
import "../styles/Healthcard.css";
import healthCardData from "../data/healthCardData";

function HealthCard() {
  return (
    <div className="health-card">
      <div className="card-container">
        {healthCardData.map((item, index) => (
          <div className="card" key={index}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={item.image} alt={item.title} width={25} />
              <h5>{item.title}</h5>
            </div>
            <p>{item.date}</p>
            <input
              type="range"
              style={item.rangeStyle}
              className="range-slider"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthCard;


```

```jsx
import React, { useState, useEffect } from "react";
import sidebarData from "../data/sidebarData";
import "../styles/Sidebar.css";

function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [expanded, setExpanded] = useState({
    general: !isMobile,
    tools: !isMobile,
    settings: !isMobile,
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setExpanded({
        general: !mobile,
        tools: !mobile,
        settings: !mobile,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (key) => {
    if (isMobile) {
      setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  return (
    <div className="sidebar">
      {sidebarData.map(({ key, title, items }) => (
        <div className="sidebar-section" key={key}>
          <p className="sidebar-heading" onClick={() => toggleSection(key)}>
            {title}
          </p>
          {expanded[key] && (
            <div className="sidebar-group">
              {items.map(({ icon: Icon, label }) => (
                <div className="sidebar-item" key={label}>
                  <Icon className="sidebar-icon" color="#3339A6" />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

```




```jsx
import React from "react";
import "../styles/UpcomingSchedule.css";

function SimpleAppointmentCard({ title, time, image }) {
  return (
    <div className="up-card-content">
      <h5>
        <span className="emoji">{image}</span> {title}
      </h5>
      <p>
        {time} <span>{parseInt(time) < 12 ? "am" : "pm"}</span>
      </p>
    </div>
  );
}

export default SimpleAppointmentCard;

```

```jsx

import React from "react";
import scheduleData from "../data/scheduleData";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/UpcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <>
      <div className="small-card">
        <div className="card-1">
          <h6 style={{ fontSize: "10px", color: "white" }}>Dentist</h6>
          <p style={{ fontSize: "10px", color: "white" }}>2:00pm - 5:00pm</p>
          <span style={{ fontSize: "10px", color: "white" }}>Dr.Samaram</span>
        </div>
        <div className="card-1">
          <h6 style={{ fontSize: "10px", color: "white" }}>Health</h6>
          <p style={{ fontSize: "10px", color: "white" }}>6:00pm - 7:00pm</p>
          <span style={{ fontSize: "10px", color: "white" }}>Dr.Samaram</span>
        </div>
      </div>
      <div className="upcoming-main">
        <h3>The Upcoming Schedule</h3>
        {scheduleData.map((daySchedule, index) => (
          <div key={index}>
            <p style={{ color: "grey", fontSize: "12px" }}>{daySchedule.day}</p>
            <div className="schedule-card">
              {daySchedule.appointments.map((appt, idx) => (
                <SimpleAppointmentCard
                  key={idx}
                  title={appt.title}
                  time={appt.time}
                  image={appt.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UpcomingSchedule;


```






### MockUp Data 

```js
// src/data/activityData.js
const activityData = [
  40, 70, 50, 90, 60, 80, 30, 40, 70, 50, 90, 60, 80, 30, 70, 50, 90, 60, 80,
  30, 40, 70, 50, 90, 60, 80, 30, 40, 70, 50, 90, 60, 80, 30, 70, 50, 90, 60,
  80, 30,
];

export default activityData;

```

```js
import profileImage from "../assets/images/profile-img.jpg";

const headerData = {
  appName: "HealthCare.",
  searchPlaceholder: "Search....",
  bellColor: "#3339A6",
  profileImage: profileImage,
};

export default headerData;

```

```js
  // src/data/healthCardData.js
import Lungs from "../assets/images/lungs.png";
import Teeth from "../assets/images/teeth.png";
import Bone from "../assets/images/bone.png";

const healthCardData = [
  {
    title: "Lungs",
    date: "26 Oct 2021",
    image: Lungs,
    rangeStyle: {},
  },
  {
    title: "Teeth",
    date: "26 Oct 2021",
    image: Teeth,
    rangeStyle: { background: "green" },
  },
  {
    title: "Bone",
    date: "26 Oct 2021",
    image: Bone,
    rangeStyle: {},
  },
];

export default healthCardData;

```

```js
const scheduleData = [
  {
    day: "On Thursday",
    appointments: [
      { title: "HealthCheckup", time: "11:00", image: "🩺" },
      { title: "Opthalmologist", time: "14:00", image: "👁️" },
    ],
  },
  {
    day: "On Friday",
    appointments: [
      { title: "Cardiologist", time: "9:00", image: "❤️" },
      { title: "Neurologist", time: "1:00", image: "👨‍⚕️" },
    ],
  },
];

export default scheduleData;

```

```js
// src/data/sidebarData.js
import {
  Calendar,
  ChartColumnIncreasing,
  History,
  LayoutDashboard,
  MessageSquare,
  Phone,
  Settings,
  SquarePlus,
} from "lucide-react";

const sidebarData = [
  {
    key: "general",
    title: "General",
    items: [
      { icon: LayoutDashboard, label: "Dashboard" },
      { icon: History, label: "History" },
      { icon: Calendar, label: "Calendar" },
      { icon: SquarePlus, label: "Appointments" },
      { icon: ChartColumnIncreasing, label: "Stats" },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    items: [
      { icon: MessageSquare, label: "Chat" },
      { icon: Phone, label: "Support" },
    ],
  },
  {
    key: "settings",
    title: "Settings",
    items: [{ icon: Settings, label: "Settings" }],
  },
];

export default sidebarData;

```



## Styles Folder 


```css
.bar-chart-with-labels {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bar-chart {
  display: flex;
  gap: 4px;
  height: 150px;
  align-items: flex-end;
}
.bar {
  width: 8px;
  border-radius: 4px;
}
.bar:nth-child(odd) {
  background-color: #05f2f2; /* First color */
}

.bar:nth-child(even) {
  background-color: #3339a6; /* Second color */
}

.day-labels {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
}

.day-label {
  width: calc((100% / 7)); /* Each day takes 1/7th of the width */
  text-align: center;
  font-size: 12px;
  color: #666;
}
.activity-title {
  color: #3339a6;
}
.activity-subtitle {
  color: rgb(182, 182, 182);
}

```
```css

.app-container {
  height: 95vh;
  overflow: hidden;
  margin: 0px;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
}

.parent-container {
  display: flex;
  flex-direction: column;
  height: 95vh;
}

.app-second-content {
  display: flex;
  flex: 1;
  height: 95vh;
}

.sidebar-content {
  width: 250px;
  margin: 10px;
  border-radius: 15px;
  background-color: #fff;
}

.app-main-dashboard {
  flex: 1;
  margin: 5px;
  padding: 10px;
  background-color: white;
  height: 95vh;
  border-radius: 15px;
}

/* Calendar */
.calender-content {
  height: 200px;
}

/* ✅ Mobile & Tablet Responsive Styles */
@media (max-width: 768px) {
  .app-container {
    height: auto;
    margin: 5px;
  }

  .app-second-content {
    flex-direction: column;
    height: auto;
  }

  .sidebar-content {
    width: 100%;
    margin: 5px 0;
    border-radius: 10px;
  }

  .app-main-dashboard {
    height: auto;
    margin: 5px 0;
    padding: 10px;
  }

  .calender-content {
    height: auto;
  }
}

.app-container {
  height: 95vh;
  overflow: hidden;
  margin: 10px;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
}

.parent-container {
  display: flex;
  flex-direction: column;
  height: 95vh;
}

.app-second-content {
  display: flex;
  flex: 1;
  height: 95vh;
}

.sidebar-content {
  width: 250px;
  margin: 10px;
  border-radius: 15px;
  background-color: #fff;
}

.app-main-dashboard {
  flex: 1;
  margin: 10px;
  padding: 10px;
  background-color: white;
  height: 95vh;
  border-radius: 15px;
}

/* Calendar */
.calender-content {
  height: 200px;
}

/* ✅ Mobile & Tablet Responsive Styles */
@media (max-width: 768px) {
  .app-container {
    height: auto;
    margin: 5px;
  }

  .app-second-content {
    flex-direction: column;
    height: auto;
  }

  .sidebar-content {
    width: 100%;
    margin: 5px 0;
    border-radius: 10px;
  }

  .app-main-dashboard {
    height: auto;
    margin: 5px 0;
    padding: 10px;
  }

  .calender-content {
    height: auto;
  }
}
@media (max-width: 480px) {
  .app-container {
    margin: 5px;
    padding: 5px;
    height: auto;
  }

  .app-second-content {
    flex-direction: column;
    height: auto;
  }

  .sidebar-content {
    width: 100%;
    margin: 5px 0;
    padding: 10px;
    border-radius: 10px;
  }

  .app-main-dashboard {
    width: 100%;
    height: auto;
    margin: 5px 0;
    padding: 10px;
    border-radius: 10px;
  }

  .calender-content {
    height: auto;
    padding: 10px;
  }

  .dashboard-option select {
    margin: 0;
    width: 100%;
    font-size: 14px;
  }

  .dashboard-option h2 {
    font-size: 18px;
  }

  .card {
    padding: 10px;
    width: 100%;
    font-size: 14px;
  }

  .card h5 {
    font-size: 16px;
  }

  .card p {
    font-size: 12px;
  }

  .range-slider {
    width: 100%;
  }
}

```



```css

.calender-content {
  width: 600px;
  max-width: 100%;
  /* border: none; */
  padding: 10px;
  font-family: sans-serif;
}

/* Apply font color */
.calender-content * {
  color: #3339a6;
  font-weight: bold;
  border: none;
}

/* Style Mobiscroll event calendar rows */
.mbsc-schedule-event {
  color: #3339a6; /* Ensure text inside events is colored */
}

/* Alternate row background: even time slots */
.mbsc-schedule-row:nth-child(even) {
  background-color: #dde2f9 !important;
  border: none;
  /* padding: 10px; */
}

/* Optional: improve spacing */
.mbsc-schedule-grid,
.mbsc-schedule-row {
  padding: 4px;
}

/* Container styling */
.calender-content {
  width: 600px;
  max-width: 100%;
  padding: 10px;
  font-family: sans-serif;
  background-color: white;
  box-sizing: border-box;
}

/* Remove all borders from Mobiscroll components */
.calender-content .mbsc-schedule,
.calender-content .mbsc-schedule-row,
.calender-content .mbsc-schedule-grid,
.calender-content .mbsc-calendar-week-day,
.calender-content .mbsc-calendar-cell,
.calender-content .mbsc-calendar {
  border: none !important;
  box-shadow: none !important;
}

/* Font color */
.calender-content {
  color: #3339a6 !important;
}

/* Even row background */
.calender-content .mbsc-schedule-row:nth-child(even) {
  background-color: #dde2f9 !important;
}

/* Optional: Padding inside rows */
.calender-content .mbsc-schedule-row {
  padding: 4px;
}

/* Optional: Remove calendar box outlines if any */
.calender-content .mbsc-calendar-cell {
  box-shadow: none !important;
  border: none !important;
}

```




```css


.dashboard {
  display: flex;
  gap: 10px;
  height: 85vh;

  padding: 5px;
  flex-wrap: wrap;
  /* border: 2px solid black; */
}

.dashboard-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 10px;
}

.dashboard-option h2 {
  color: #3c39ac;
  font-size: 18px;
}

.dashboard-option select {
  border: none;
  outline: none;
  color: #3c39ac;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 5px;
  background-color: #f1f1f1;
}

/* Anatomy section layout */
.anatomySection-content {
  flex: 1;
  max-width: 590px;
  display: flex;
  gap: 20px;
}

/* Calendar section layout */
.calender-content {
  width: 600px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
    height: auto;
    overflow-y: scroll;
    text-align: center;
    padding: 10px;
  }

  .dashboard-option {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
  }

  .dashboard-option select {
    margin: 0;
    width: 100%;
  }

  .anatomySection-content,
  .calender-content {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 480px) {
  .dashboard {
    flex-direction: column;
    height: auto;
    padding: 8px;
    gap: 15px;
  }

  .dashboard-option {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 10px;
  }

  .dashboard-option h2 {
    font-size: 16px;
  }

  .dashboard-option select {
    width: 100%;
    font-size: 14px;
    padding: 6px;
  }

  .anatomySection-content {
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
  }

  .calender-content {
    width: 100%;
    padding: 10px 0;
    gap: 15px;
  }

  .card {
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }

  .card h5 {
    font-size: 16px;
  }

  .card p {
    font-size: 12px;
  }

  .range-slider {
    width: 100%;
  }
}

```



```css

.header {
  width: 100%;
  background-color: white;
  padding: 0.78rem;
  border-radius: 15px;
}
.header-content {
  display: flex;
  justify-content: space-between;
}
/* Base Header Styles */
.header {
  background-color: #ffffff;
  padding: 1rem 1.5rem;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */
  position: sticky;
  top: 0;
  z-index: 1000;
}
.bell-icon {
  stroke: #3339a6;
  width: 24px;
  height: 24px;
  fill: #3339a6;
}
/* Flex Container */
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Logo */
.header-logo h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #05f2f2;
  margin: 0;
}
.header-logo span {
  color: #3339a6;
}
/* Search Section */
.search-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: #f1f5f9;
  border-radius: 8px;
  flex: 1;
  margin: 0 1rem;
  max-width: 400px;
}

.search-container input[type="search"] {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
}

/* Right Icons */
.right-icon {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .search-container {
    width: 100%;
    margin: 0;
  }

  .right-icon {
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .header-logo h1 {
    font-size: 1.2rem;
  }

  .search-container input[type="search"] {
    font-size: 12px;
  }

  .right-icon {
    gap: 0.5rem;
    display: none;
  }
}

.plus-icon {
  background-color: #3339a6;
  padding: 0.24rem;
  border-radius: 7px;
  color: white;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.search-icon {
  color: #3339a6;
}
.profile-pic {
  width: 32px;
  height: 32px;
  border-radius: 7px;
  border: none;
  object-fit: cover;
}

```



```css

.card {
  max-width: 500px;
  /* border: 1px solid black; */
  margin: 5px;
  border-radius: 8px;
  color: black;
  padding: 2px;
  display: flex;
  flex-direction: column;

  background-color: #f1f5f9;
  padding: 1rem 1.5rem;

  gap: 10px;
}
.card:hover {
  border: 1px solid black;
}
.card p {
  color: rgb(211, 211, 211);
  font-size: 10px;
  font-weight: bold;
}
.range-slider {
  -webkit-appearance: none;
  width: 50%;
  height: 3px;
  background: #af5251;
  border-radius: 5px;
  outline: none;
  margin: 10px 0;
}

/* Chrome, Safari, Edge */
.range-slider::-webkit-slider-thumb {
  /* -webkit-appearance: none; */
  /* appearance: none; */
  width: 18px;
  height: 18px;
  background: #3339a6;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}

.card {
  max-width: 500px;
  margin: 5px;
  border-radius: 8px;
  color: black;
  padding: 2px;
  display: flex;
  flex-direction: column;
  background-color: #f1f5f9;
  padding: 1rem 1.5rem;
  gap: 10px;

  /* Transition for smooth hover effect */
  border: 1px solid transparent;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  border: 1px solid black;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}



```







```css

.sidebar {
  /* margin: 10px; */
  width: 100%;
  /* max-width: 300px; */
  padding: 16px;
  /* background-color: #fff; */
  /* box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); */
  overflow-y: auto;
}

.sidebar-heading {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  color: grey;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.sidebar-item:hover {
  background-color: #f1f5f9;
  color: #3734a9;
  font-weight: bold;
}

.sidebar-icon {
  height: 20px;
  transition: fill 0.3s ease;
}

.sidebar-icon:hover {
  fill: #3339a6;
}

.sidebar-group {
  margin-left: 10px;
}



```



```css

.schedule-card {
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
}
.up-card-content {
  background-color: #dde2f9;
  padding: 1rem 3rem;
  color: black;
  border-radius: 8px;
}

.upcoming-main h3 {
  color: #3339a6;
  margin-bottom: 10px;
}
.upcoming-main > p {
  color: grey;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
}

.emoji {
  font-size: 1.3rem;
  margin-right: 6px;
  display: inline-block;
}

.small-card {
  /* margin-top: 0; */
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  /* border: 1px solid black; */
  /* margin-bottom: 0px; */
}
.card-1 {
  text-align: center;

  background-color: #3339a6;
  padding: 0.2rem 3rem;
  border-radius: 15px;
  /* color: black !important; */
}



```







