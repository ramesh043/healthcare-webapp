import { Bell, Plus, Search } from "lucide-react";
import React from "react";
import headerData from "../data/headerData";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo">
          <h1>
            {headerData.appName.split("Care")[0]}
            <span>Care.</span>
          </h1>
        </div>

        <div className="search-container">
          <Search className="search-icon" />
          <input type="search" placeholder={headerData.searchPlaceholder} />
          <Bell
            color={headerData.bellColor}
            className="bell-icon"
            fill={headerData.bellColor}
          />
        </div>

        <div className="right-icon">
          <img
            src={headerData.profileImage}
            alt="profile"
            className="profile-pic"
          />
          <Plus className="plus-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
