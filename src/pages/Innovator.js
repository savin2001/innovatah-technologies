import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import User from "../assets/user.png";

const Innovator = () => {
    // const next = document.querySelector(".next");
    // const prev = document.querySelector(".previous");
    // const slides = document.querySelectorAll(".slide");

    // let index = 0;
    // display(index);

    // function display(index) {
    //     slides.forEach((slide) => {
    //         slide.style.display = "none";
    //     });
    //     slides[index].style.display = "flex";
    // }

    // function nextSlide() {
    //     index++;
    //     if (index > slides.length - 1) {
    //         index = 0;
    //     }
    //     display(index);
    // }

    // function prevSlide() {
    //     index--;
    //     if (index < 0) {
    //         index = slides.length - 1;
    //     }
    //     display(index);
    // }

    // next.addEventListener("click", nextSlide);
    // prev.addEventListener("click", prevSlide);
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        Innovatah <strong> page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="container">
                    <main>
                        <div class="slider">
                            <div class="buttons">
                                <div class="previous"></div>
                                <div class="next"></div>
                            </div>

                            <div class="slide">
                                <div class="testimonial">
                                    <blockquote>
                                        “ I’ve been interested in coding for a
                                        while but never taken the jump, until
                                        now. I couldn’t recommend this course
                                        enough. I’m now in the job of my dreams
                                        and so excited about the future. ”
                                    </blockquote>
                                    <p class="author">
                                        Tanya Sinclair
                                        <span>UX Engineer</span>
                                    </p>
                                </div>

                                <div class="slider-img">
                                    <img
                                        src="https://alcs-slider.netlify.app/images/image-tanya.jpg"
                                        alt="Author"
                                    />
                                </div>
                            </div>

                            <div class="slide">
                                <div class="testimonial">
                                    <blockquote>
                                        “ If you want to lay the best foundation
                                        possible I’d recommend taking this
                                        course. The depth the instructors go
                                        into is incredible. I now feel so
                                        confident about starting up as a
                                        professional developer. ”
                                    </blockquote>
                                    <p class="author">
                                        John Tarkpor
                                        <span>Junior Front-end Developer</span>
                                    </p>
                                </div>

                                <div class="slider-img">
                                    <img
                                        src="https://alcs-slider.netlify.app/images/image-john.jpg"
                                        alt="Author"
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="container-bg">
                    <div className="container">
                        <div id="courses" className="training-courses">
                            <h2>Our community</h2>
                            <div className="focus-cards courses">
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 1</h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 2 </h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="focus-cards courses">
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 3</h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 4 </h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="focus-cards courses">
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 5 </h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 6 </h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="focus-cards courses">
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 7</h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 8 </h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="focus-cards courses">
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 9</h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img
                                                className="innovatah"
                                                src={User}
                                                alt=""
                                            />
                                            <div className="text">
                                                <h3>Person 10</h3>
                                            </div>
                                        </div>

                                        <div className="flip-card-back">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Maxime, inventore ducimus. Quasi
                                                eligendi facilis molestiae est
                                                error mollitia vitae veniam!
                                                Itaque atque est neque minus.
                                                Facere voluptates aliquam amet
                                                placeat eligendi quas ducimus.
                                                Vero in libero id, tempore nemo
                                                recusandae doloribus ipsa quam
                                                totam esse, nihil
                                                exercitationem. Dolorum,
                                                aspernatur ullam!
                                            </p>
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

export default Innovator;
