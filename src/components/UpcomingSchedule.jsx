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
