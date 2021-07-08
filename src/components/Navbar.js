import React, { useState, useRef } from "react";
import Logo from "../assets/innovatah-logo-removebg-preview.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
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
                                to="/about"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <p className="nav-link" onClick={onClick}>
                                Solutions
                            </p>
                            <div
                                ref={dropdownRef}
                                className={`menu ${
                                    isActive ? "active" : "inactive"
                                }`}
                            >
                                <ul>
                                    <li>
                                        <Link
                                            to="/services"
                                            onClick={closeMenu}
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/products"
                                            onClick={closeMenu}
                                        >
                                            Products
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/api"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Api
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/innovatah"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Innovatah
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
                                to="/focus"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                focus
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
                                to="/contact"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                <button className="join pulse">Contact</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
