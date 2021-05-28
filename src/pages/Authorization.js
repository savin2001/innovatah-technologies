import React, { useState } from "react";

const Authorization = () => {
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
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="username"
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
                                <button
                                    type="submit"
                                    className="join submit-btn"
                                >
                                    Sign in
                                </button>
                            </form>
                            <form
                                id="register"
                                action=""
                                className="input-group"
                            >
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label for="">Name</label>
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
                                            type="number"
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
                                                       e.g. university,high school
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
