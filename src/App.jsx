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
