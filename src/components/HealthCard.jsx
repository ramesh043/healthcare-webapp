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
