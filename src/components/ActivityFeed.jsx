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
