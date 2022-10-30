import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function Signup() {

    return (
        <div className="body">
            {/*navbar*/}
            <nav className="navbar">
                <ul className="navlinks">
                    <li className="navlink brand"><a href="/">CookBook</a></li>
                    <li className="navlink"><a href="/">Home</a></li>
                    <li className="navlink"><a href="/">About</a></li>
                    <li className="navlink"><a href="/">Contact Us</a></li>
                </ul>
            </nav>

            {/*main section*/}
            <div className="main">
                <div className="main-left">
                    <div className="text">
                        <h2>Create Account.</h2>
                        <p>Sign up to get started.</p>
                    </div>
                    <img src="image.png" height="335px" alt="/"/>
                </div>
                <div className="main-right">
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" value="Continue"/>
                        <p style={{textAlign: "center", marginBottom: '20px'}}>or continue with</p>
                        <div className="instant-login">
                            <div className="facebook-login login-button">
                                <i className="fa-brands fa-lg fa-facebook"></i>
                            </div>
                            <div className="google-login login-button">
                                <i className="fa-brands fa-lg fa-google"></i>
                            </div>
                            <div className="apple-login login-button">
                                <i className="fa-brands fa-lg fa-apple"></i>
                            </div>
                        </div>
                        <p style={{textAlign: "center", marginBottom: '20px'}}>Already have an account? <Link to="/">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}