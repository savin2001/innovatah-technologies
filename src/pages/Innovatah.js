import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import User from "../assets/user.png"

const Innovatah = () => {
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
                <div className="container-bg">
                    <div className="container">
                        <div id="courses" className="training-courses">
                            <h2>Our community</h2>
                            <div className="focus-cards courses">
                                <div className="card flip-card">
                                    <div className="flip-card-inner">
                                        <div className="img flip-card-front">
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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
                                            <img className="innovatah" src={User} alt="" />
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

export default Innovatah;
