import React from "react";
import Tag from "../assets/tags-image.png";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        A <strong>social enterprise</strong> that intends to
                        lead in full innovations circles towards creative
                        systems
                    </h1>
                    <div className="tags">
                        <Link to="/innovator" className="tag">
                            <img src={Tag} alt="" />
                            <div className="fg">Innovator</div>
                        </Link>
                        <Link to="/trainings" className="tag">
                            <img src={Tag} alt="" />
                            <div className="fg">Training</div>
                        </Link>
                        <Link to="/services" className="tag">
                            <img src={Tag} alt="" />
                            <div className="fg">Services </div>
                        </Link>
                    </div>
                    <Link to="/authorization"><button className="join">Start your journey</button> </Link>
                </div>
            </div>
            </>
    );
};

export default Home;
