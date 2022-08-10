import React from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'inline-flex',
    float: 'right',
    marginLeft: '5vw',
  };
  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    fontSize: '1.2rem',
  };
  const anchorStyle = {
    textDecoration: 'none',
    color: 'blue',
    margin: '2vw',
  };
  const liStyle = {
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
  };
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li>
          <NavLink to="/" style={anchorStyle}>Home</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/Calculator" style={anchorStyle}>Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/Quote" style={anchorStyle}>Quotes</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
