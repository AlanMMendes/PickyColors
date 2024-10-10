import React from "react";
import "./styles.css"; // Importa o CSS

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {isOpen && <div className="sidebar-content"></div>}
    </div>
  );
};

export default Sidebar;
