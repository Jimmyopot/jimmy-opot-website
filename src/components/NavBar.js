import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../img/DSC_1035.JPG';
import '../App.scss';

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="NavBar__nav">
                <div className="NavBar__profile">
                    <img src={avatar} alt="" />
                </div>

                <ul className="NavBar__nav-items">
                    <li className="NavBar__nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="NavBar__nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="NavBar__nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="NavBar__nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="NavBar__nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="NavBar__footer">
                    <p>
                        @2021 Jimmy Opot Website
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar
