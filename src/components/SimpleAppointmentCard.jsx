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
