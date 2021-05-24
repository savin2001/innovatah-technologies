import React from "react";
import Logo from "../assets/innovatah-logo-removebg-preview.png";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaInstagramSquare,
} from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
const Footer = () => {
    return (
        <>
            <div className="footer-bg">
                <div className="container">
                    <div className="footer-row">
                        <div className="footer-col">
                            <div className="footer-hd">
                                <img src={Logo} alt="" />
                                <div>
                                    <h3>
                                        <strong>Innovatah</strong> <br />
                                        Technologies
                                    </h3>
                                </div>
                            </div>
                            <div className="footer-dtl">
                                <p>
                                    <i>
                                        <GoLocation size={20} />
                                    </i>
                                    Nairobi, Kenya
                                </p>
                                <p>
                                    <i>
                                        <FiMail size={20} />
                                    </i>
                                    info@innovatah.com
                                </p>
                                <p>
                                    <i>
                                        <FiPhone size={20} />
                                    </i>
                                    072345679
                                </p>
                                <p>lorem ipsum dolor sit</p>
                                <p>lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h3>About us</h3>
                            <div className="footer-dtl">
                                <p>lorem ipsum dolor sit</p>
                                <p>lorem ipsum dolor sit</p>
                                <p>lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h3>Support</h3>
                            <div className="footer-dtl">
                                <p>lorem ipsum dolor sit</p>
                                <p>lorem ipsum dolor sit</p>
                                <p>lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h3>Get in touch</h3>
                            <div className="footer-dtl">
                                <p className="socials">
                                    <i>
                                        <FaFacebookSquare size={25} />
                                    </i>
                                    <i>
                                        <FaTwitterSquare size={25} />
                                    </i>
                                    <i>
                                        <FaLinkedin size={25} />
                                    </i>
                                    <i>
                                        <FaInstagramSquare size={25} />
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sprt"></div>
                    <div className="copyright">
                        <small>
                            Copyright © 2021. Designed by Osuka Technologies and
                            Developed by Osuka Technologies and Innovator
                            Technologies
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
