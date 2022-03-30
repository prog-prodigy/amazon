import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()
  const Register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth)
      if(auth){
        navigate('/')
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const Signin = async(e) => {
    e.preventDefault();
    try{
      
      await signInWithEmailAndPassword(auth, email, password);
     if(auth){
       navigate('/')
     }
    }catch(error){
      alert(error.message)
    }

  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
          alt="logo"
        />
      </Link>
      <div className="login-container">
        <h2>Sign in</h2>
        <form>
          <h5>E-mail</h5>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={Signin} className="login-button">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to AMAZON FAKE's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <div className="register">
        <p style={{ color: "rgba(0, 0, 0, 0.383)", fontSize: "smaller" }}>
          New to Amazon?
        </p>

        <button onClick={Register} className="register-button">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
