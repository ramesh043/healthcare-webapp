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
