import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Api = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        APIs <strong> page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation
                className="service-bg"
                animateIn="expandUp"
                animateOnce
            >
                <div className="container-bg1" id="api-contain">
                    <div className="container">
                        <div className="api-list">
                            <div className="text-center mt-5">
                                <h2>Our APIs</h2>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis settings">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/6NKPrhO.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Settings API</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis speedup">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/KMbnpFF.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Speedup API</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis privacy">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/AgyneKA.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Privacy API</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis settings">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/6NKPrhO.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Other API</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis backups">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/vdH9LKi.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Backups API</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis ssl">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/v6OnUqu.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Security  API</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis database">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/VzjZw9M.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Database API</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box">
                                        <div className="our-apis settings">
                                            <div className="icon">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/6NKPrhO.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                            <h4>Other API</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Api;
