import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul>
            <li>
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/Calculator" >Calculator</NavLink>
            </li>
            <li>
            <NavLink to="/Quote" >Quotes</NavLink>
            </li>
            </ul>
        </nav>
    )
}
export default Navbar;