import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Products = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        Products <strong> page</strong>
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
                            <h2>Our Products</h2>

                            <div className="row">
                                <div className="col">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-briefcase service-icon"></i>
                                        </div>

                                        <h4 className="title">
                                            <a href="#product1">Product 1</a>
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
                                            <a href="#product2">Product 2</a>
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
                                            <a href="#product3">Product 3</a>
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
                                            <a href="#product4">Product 4</a>
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
                                            <a href="#product5">Product 5</a>
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
                                            <a href="#product5">Product 6</a>
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

export default Products;
