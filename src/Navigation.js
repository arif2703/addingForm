import React from 'react'
//import {} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navigation =()=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" exact to="/">
                Operations
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/About">
                        About Us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/Adduser">
                        Add User
                    </NavLink>
                </li> 
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/Counts">
                        Counting
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/ValidateForm">
                        Validate Form
                    </NavLink>
                </li>
                </ul>
            </div>
            </nav>
        </>
    )
}
export default Navigation;