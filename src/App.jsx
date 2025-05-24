import React from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}

export default App;
