import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        Services <strong> page</strong>
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
                <div className="container">
                    <section className="services section-bg" id="services">
                        <div className="service-container">
                            <h2>Our Services</h2>

                            <div className="row">
                                <div className="col">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-briefcase service-icon"></i>
                                        </div>

                                        <h4 className="title">
                                            <a href="#service1">Service 1</a>
                                        </h4>
                                        <p>
                                            Laudem latine persequeris id sed, ex
                                            fabulas delectus quo. No vel
                                            partiendo abhorreant
                                            vituperatoribus.
                                        </p>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-clipboard service-icon"></i>
                                        </div>

                                        <h4 className="title">
                                            <a href="#service2">Service 2</a>
                                        </h4>

                                        <p>
                                            Laudem latine persequeris id sed, ex
                                            fabulas delectus quo. No vel
                                            partiendo abhorreant
                                            vituperatoribus.
                                        </p>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-chart-bar service-icon"></i>
                                        </div>

                                        <h4 className="title">
                                            <a href="#service3">Service 3</a>
                                        </h4>

                                        <p>
                                            Laudem latine persequeris id sed, ex
                                            fabulas delectus quo. No vel
                                            partiendo abhorreant
                                            vituperatoribus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-binoculars service-icon"></i>
                                        </div>

                                        <h4 className="title">
                                            <a href="#service4">Service 4</a>
                                        </h4>

                                        <p>
                                            Laudem latine persequeris id sed, ex
                                            fabulas delectus quo. No vel
                                            partiendo abhorreant
                                            vituperatoribus.
                                        </p>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-cog service-icon"></i>
                                        </div>

                                        <h4 className="title">
                                            <a href="#service5">Service 5</a>
                                        </h4>

                                        <p className="description">
                                            Laudem latine persequeris id sed, ex
                                            fabulas delectus quo. No vel
                                            partiendo abhorreant
                                            vituperatoribus.
                                        </p>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-calendar-alt service-icon"></i>
                                        </div>

                                        <h4 className="title">
                                            <a href="#service5">Service 6</a>
                                        </h4>

                                        <p className="description">
                                            Laudem latine persequeris id sed, ex
                                            fabulas delectus quo. No vel
                                            partiendo abhorreant
                                            vituperatoribus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Services;
