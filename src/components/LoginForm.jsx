import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import "../components/login.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={onLogin} className="form-control">
        <label htmlFor="user">Username</label>
        <input
          required
          id="user"
          type="text"
          placeholder="Enter your username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button" type="submit">
          <p>Login</p>
        </button>

        <div
          style={{
            marginLeft: "20%",
            textDecoration: "none",
            display: "flex",
          }}
        >
          <p style={{ whiteSpace: "nowrap", color: "#344054" }}>
            Don't have an account?{" "}
          </p>
          <Link
            style={{
              marginLeft: "140%",
              marginTop: "2px",
              color: "gray",
              textDecoration: "none",
              fontWeight: "bolder",
            }}
            to="/signup"
          >
            signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
