import React, { useState } from "react";
import Logo from "../assets/innovatah-logo-removebg-preview.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar slideDown">
            <div className="nav">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img src={Logo} alt="" />
                    <div>
                        <strong>Innovatah</strong> <br /> Technologies
                    </div>
                </Link>
                <div onClick={handleClick} className="nav-icon">
                    {open ? <FiX /> : <FiMenu />}
                </div>
                <ul className={open ? "nav-links active" : "nav-links"}>
                    <li className="nav-item">
                        <Link
                            to="/focus"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            focus
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/services"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/products"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/innovator"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Innovator
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/trainings"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            trainings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            About us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/blog"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/join"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            <button className="join pulse">Join Us</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
