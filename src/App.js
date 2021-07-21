import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import "animate.css/animate.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Innovator from "./pages/Innovator";
import Focus from "./pages/Focus";
import Trainings from "./pages/Trainings";
import Blog from "./pages/Blog";
import Authorization from "./pages/Authorization";
import API from "./pages/Api";
import Dashboard from "./pages/authorization/Dashboard";
import Service from "./pages/cat/Service";
// import PrivateRoute from "./pages/utils/PrivateRoute";
// import PublicRoute from "./pages/utils/PublicRoute";
// import {
//     getToken,
//     removeUserSession,
//     setUserSession,
// } from "./pages/utils/Common";

function App() {
    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const [isLoading, setIsLoading] = useState(true);

    function fakeRequest() {
        return new Promise((resolve) => setTimeout(() => resolve(), 1500));
    }

    useEffect(() => {
        fakeRequest().then(() => {
            const el = document.querySelector(".loading");
            if (el) {
                el.remove();
                setIsLoading(!isLoading);
            }
        });
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <div className="app">
                    <Router>
                        <Navbar />
                        <div className="theme" onClick={themeToggler}>
                            <div className="button r" id="button-1">
                                <input type="checkbox" className="checkbox" />
                                <div className="knobs"></div>
                                <div className="layer">
                                    <div id="top-right"></div>
                                </div>
                            </div>
                        </div>

                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/focus" exact component={Focus} />
                            <Route
                                path="/services"
                                exact
                                component={Services}
                            />

                            <Route
                                path="/products"
                                exact
                                component={Products}
                            />
                            <Route path="/api" exact component={API} />
                            <Route
                                path="/trainings"
                                exact
                                component={Trainings}
                            />
                            <Route
                                path="/innovator"
                                exact
                                component={Innovator}
                            />
                            <Route path="/about" exact component={About} />
                            <Route path="/blog" exact component={Blog} />
                            <Route path="/contact" exact component={Contact} />
                            <Route
                                path="/authorization"
                                exact
                                component={Authorization}
                            />
                            <Route
                                path="/dashboard"
                                exact
                                component={Dashboard}
                            />
                            <Route
                                path="/services/:id/:title/:body"
                                exact
                                component={Service}
                            ></Route>
                        </Switch>
                    </Router>
                    <Footer />
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
