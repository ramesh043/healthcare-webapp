import React from "react";
import humanBody from "../assets/images/humanbody.png";
import ActivityFeed from "./ActivityFeed";
import "../styles/Anatomy.css";
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
