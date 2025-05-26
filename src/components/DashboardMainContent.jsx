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
