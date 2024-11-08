import './navbar.css'
import {NavLink} from "react-router-dom"
import React from "react";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function NavBar() {
    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Skills </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/contact" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contact </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;