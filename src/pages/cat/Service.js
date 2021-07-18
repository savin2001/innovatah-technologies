import React from "react";
import { withRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";


const Service = (props) => {
    console.log(props);
    return (
        <>
            <ScrollAnimation
                className="service-bg"
                animateIn="expandUp"
                id="serviceCat"
            >
                <div className="container-bg1">
                    
                        <h1>{props.match.params.title}</h1>
                   
                    <p>{props.match.params.body}</p>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default withRouter(Service);
