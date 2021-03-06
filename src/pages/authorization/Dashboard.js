import React from "react";
import { getUser, removeUserSession } from "../utils/Common";
import "./dashStyle.css";
// import "./Functionality";
const Dashboard = (props) => {
    const user = getUser();

    const handleLogout = () => {
        removeUserSession();
        props.history.push("/authorization");
    };

    return (
        <>
            <div classNameName="container-landing">
                <div classNameName="landing slideLeft">
                    <header class="page-header">
                        <nav>
                            <a
                                href="#0"
                                aria-label="forecastr logo"
                                class="logo"
                            >
                                <svg width="140" height="49">
                                    <use xlinkHref="#logo"></use>
                                </svg>
                            </a>
                            <button
                                class="toggle-mob-menu"
                                aria-expanded="false"
                                aria-label="open menu"
                            >
                                <svg width="20" height="20" aria-hidden="true">
                                    <use xlinkHref="#down"></use>
                                </svg>
                            </button>
                            <ul class="admin-menu">
                                <li class="menu-heading">
                                    <h3>{user.name}</h3>
                                </li>
                                <li>
                                    <a href="#0">
                                        <svg>
                                            <use xlinkHref="#pages"></use>
                                        </svg>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <svg>
                                            <use xlinkHref="#users"></use>
                                        </svg>
                                        <span>My courses</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <svg>
                                            <use xlinkHref="#trends"></use>
                                        </svg>
                                        <span>My progress</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <svg>
                                            <use xlinkHref="#collection"></use>
                                        </svg>
                                        <span>Other courses</span>
                                    </a>
                                </li>
                                <li class="menu-heading">
                                    <h3>Settings</h3>
                                </li>
                                <li>
                                    <a href="#0">
                                        <svg>
                                            <use xlinkHref="#settings"></use>
                                        </svg>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <svg>
                                            <use xlinkHref="#options"></use>
                                        </svg>
                                        <span>Options</span>
                                    </a>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                        <svg aria-hidden="true">
                                            <use xlinkHref="#logout"></use>
                                        </svg>
                                        <span>Log out</span>
                                    </button>
                                    <button
                                        class="collapse-btn"
                                        aria-expanded="true"
                                        aria-label="collapse menu"
                                    >
                                        <svg aria-hidden="true">
                                            <use xlinkHref="#collapse"></use>
                                        </svg>
                                        <span>Collapse</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <section class="page-content">
                        <section class="search-and-user">
                            <div class="admin-profile">
                                <span class="greeting">Hello {user.name}</span>
                                <div class="notifications">
                                    <span class="badge">1</span>
                                    <svg>
                                        <use xlinkHref="#users"></use>
                                    </svg>
                                </div>
                            </div>
                        </section>
                        <section class="grid">
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                            <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi possimus error nostrum provident maiores voluptas tempore aspernatur ab consequuntur unde minima blanditiis soluta earum, corporis amet cum aperiam ipsum!</article>
                        </section>
                        
                    </section>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
