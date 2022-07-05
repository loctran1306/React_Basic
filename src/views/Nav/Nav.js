import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="selected">
                    Home
                </NavLink>
                <NavLink to="/todo" activeclassname="selected">
                    To Do
                </NavLink>
                <NavLink to="/about" activeclassname="selected">
                    About
                </NavLink>
                <NavLink to="/user" activeclassname="selected">
                    User
                </NavLink>
            </div>
        );
    }
}
export default Nav;
