import React, { useState } from "react";
import axios from "axios";
// import { setUserSession } from "./utils/Common";
// import isLoading from "../components/Loading";

const Authorization = (props) => {
    let moveLeft = document.getElementById("login");
    let moveRight = document.getElementById("register");
    let toggler = document.getElementById("switch");
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    if (login) {
        setLogin(() => {
            moveLeft.style.left = "50px";
            moveRight.style.left = "550px";
            toggler.style.left = "0";
        });
    }
    if (register) {
        setRegister(() => {
            moveLeft.style.left = "-500px";
            moveRight.style.left = "50px";
            toggler.style.left = "110px";
        });
    }
    const formRegister = () => {};

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = () => {
        let data = JSON.stringify({
            username: "karanjaeric",
            password: "karanjaeric",
        });

        let config = {
            method: "post",
            url: "http://188.166.22.79:8080/innovatah-website-api/student/authenticate",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // function fakeRequest() {
    //     return new Promise((resolve) => setTimeout(() => resolve(), 1500));
    // }
    // fakeRequest().then(() => {
    //     const el = document.querySelector(".loading");
    //     if (el) {
    //         el.remove();
    //         setIsLoading(isLoading);
    //     }
    // });
    // if (isLoading) {
    //     return <isLoading />;
    // }
    return (
        <>
            <div className="container slideLeft">
                <div className="auth-container">
                    <div className="hero">
                        <div className="form-box">
                            <div className="button-box">
                                <div id="switch"></div>
                                <button
                                    className="toggle-btn"
                                    onClick={setLogin}
                                >
                                    Log in
                                </button>
                                <button
                                    className="toggle-btn"
                                    onClick={setRegister}
                                >
                                    Register
                                </button>
                            </div>
                            <form id="login" action="" className="input-group">
                                {error && (
                                    <div className="slideDown error">
                                        <p>{error}</p>
                                    </div>
                                )}
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="username"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            {...username}
                                            autoComplete="new-password"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Username</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            {...password}
                                            autoComplete="new-password"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Password</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" name=""/>
                                    <span className="">Remember me</span>
                                </div>
                                <input
                                    type="button"
                                    className="join submit-btn"
                                    value={loading ? "Loading..." : "Sign up"}
                                    disabled={loading}
                                    onClick={handleLogin}
                                />
                            </form>
                            <form
                                id="register"
                                action=""
                                className="input-group"
                                onSubmit={formRegister}
                            >
                                <input type="hidden" name="regId" />
                                <div className="form-row">
                                    <div className="input-data">
                                        <select name="title" id="">
                                            <option value="titleSelection">
                                                Select your title
                                            </option>
                                            <option value="Mr">Mr</option>
                                            <option value="Miss">Miss</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Dr">Dr</option>
                                        </select>
                                    </div>
                                    <div className="input-data" required>
                                        <input
                                            type="text"
                                            name="fname"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">First name</label>
                                    </div>
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="sname"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Second name</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="email"
                                            name="name"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Email</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Phone number</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">
                                            Level of study{" "}
                                            <small>
                                                <blockquote>
                                                    <i>
                                                        e.g. university,high
                                                        school
                                                    </i>
                                                </blockquote>
                                            </small>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="username"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Choose username</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="password"
                                            name="password"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Password</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="password"
                                            name="password"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Confirm password</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" name="" />
                                    <span className="">
                                        I agree to the terms and conditions
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="join submit-btn"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authorization;
