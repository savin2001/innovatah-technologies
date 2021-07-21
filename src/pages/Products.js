import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const productCategories = [
    {
        id: "p1",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
    },
    {
        id: "p2",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
    },
    {
        id: "p3",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
    },
    {
        id: "p4",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
    },
    {
        id: "p5",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
    },
    {
        id: "p6",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
    },
];

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
                            <div className="blog-posts">
                                {productCategories.map((item) => (
                                    <div className="post" key={item.id}>
                                        <img
                                            src={item.imgUrl}
                                            alt={item.id}
                                            className="post-img"
                                        />
                                        <div className="post-content">
                                            <h3>
                                                {item.text}
                                            </h3>
                                            <span className="date">
                                                {item.subtext}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Products;
