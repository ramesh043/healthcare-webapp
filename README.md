   # Healthcare WebApp

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

---


## Project Structure

src/
components/ # React UI components (buttons, forms, layouts, etc.)
data/ # Static data, mock data, or JSON files used in the app
styles/ # CSS, SCSS, or styling files for the application
App.jsx # Root React component
main.jsx # Application entry point
vite.config.js # Vite configuration file

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/healthcare-webapp.git
   cd healthcare-webapp
   
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
