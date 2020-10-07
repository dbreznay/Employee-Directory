import React from "react";
import SearchName from "../SearchName";
import "./Nav.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      
      <div className="search-area">
        <SearchName/>
      </div>
    </nav>
  );
}

export default Nav;