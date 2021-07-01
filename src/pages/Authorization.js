import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "./utils/Common";

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
    const [error, setError] = useState(null);

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios
            .post("http://localhost:4000/users/signin", {
                username: username,
                password: password,
            })
            .then((response) => {
                setLoading(false);
                setUserSession(response.data.token, response.data.user);
                props.history.push("/dashboard");
            })
            .catch((error) => {
                setLoading(false);
                if (
                    error.response.status === 401 ||
                    error.response.status === 400
                ) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong! Try again later.");
                }
                console.error("error ", error);
            });
    };
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
                                        <label for="">Username</label>
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
                                        <label for="">Password</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" name="" id="" />
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
                                        <label for="">Email</label>
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
                                        <label for="">Phone number</label>
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
                                        <label for="">
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
                                        <label for="">Choose username</label>
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
                                        <label for="">Password</label>
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
                                        <label for="">Confirm password</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" name="" id="" />
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
