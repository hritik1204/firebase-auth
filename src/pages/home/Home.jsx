import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

import "../home/home.css";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  });

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="nav-header">
        <h1 className="heading">Breeze.ai</h1>
        <button onClick={handleLogout} className="logout-btn">
          <span>Logout</span>
        </button>
      </div>
      <h1 style={{ marginTop: "15%", textAlign: "center" }}>
        Hello world!!!!!!
      </h1>
    </div>
  );
};

export default Home;
