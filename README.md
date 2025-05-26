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
### Code Structure
``
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
``
