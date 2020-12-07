import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

function Navbar({ handleSearchChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Navbar;