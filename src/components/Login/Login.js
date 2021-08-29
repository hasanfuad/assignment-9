import React from "react";
import { useState } from "react";

import "./Login.css";

import * as firebase from "firebase";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig";
import Header from "../../Header/Header";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    success: "",
    error: "",
    password: "",
  });

  const history = useHistory();
  const location = useLocation();

  const {from} = location.state || {from: {pathname: "/"}};

  // Google validation

  const provider = new firebase.auth.GoogleAuthProvider();
  const googleBtn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {displayName, email} = result.user;
        console.log(user);
        const userInfo = {
          name:displayName,
          email
        }
        console.log(userInfo);
        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // Email validation
  const handleInputField = (e) => {
    let isValid = true;

    if (e.target.name === "email") {
      const validMail = /\S+@\S+\.\S+/.test(e.target.value);
      isValid = validMail;
    }

    if (e.target.name === "password") {
      const validLength = e.target.value.length > 6;
      const validPass = /\d{1}/.test(e.target.value);

      isValid = validLength && validPass;
    }

    if (isValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmitForm = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...user };
          newUserInfo.success = "New user successfully created.";
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          console.log(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...user };
          newUserInfo.success = "New user successfully login!";
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(newUserInfo);
          history.replace(from);
          updateUserName(newUserInfo.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
          updateUserName(newUserInfo.name);
        });
    }

    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        console.log("Successfully updated info", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const styles = {
    marginTop: "200px",
  };
  return (
    <div>
      <Header/>
      {user.success ? (
        <p style={{backgroundColor: "gray", color: "green", textAlign: "center"}}>{user.success}</p>
      ) : (
        <p style={{ color: "red", textAlign: "center"}}>{user.error}</p>
      )}
      <div className="d-flex justify-content-around login-bg" style={styles}>
        {user.isLoggedIn && (
          <div>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        )}

        <form onSubmit={handleSubmitForm}>
          <p
            style={{ fontSize: "20px", fontWeight: "600"}}
          >
            {newUser ? "Create an account" : "Login account"}
          </p>
          {newUser && (
            <input
              className="input-btn rounded"
              type="text"
              name="name"
              onBlur={handleInputField}
              placeholder="Your name"
            />
          )}
          <br />
          <input
            className="input-btn rounded"
            type="text"
            name="email"
            onBlur={handleInputField}
            placeholder="Your email"
            required
          />
          <br />
          <input
            className="input-btn rounded"
            type="password"
            name="password"
            onBlur={handleInputField}
            placeholder="Your password"
            required
          />
          <br />
          <input
            className="input-btn rounded btn-warning form-btn"
            type="submit"
            value={newUser ? "Sign Up" : "Sign In"}
          />
          <p
            style={{
              color: "orange",
              textDecoration: "underline",
              fontWeight: "600",
              fontSize: "20px",
              cursor: "pointer",
            }}
            className="mt-4"
            onClick={() => setNewUser(!newUser)}
          >
            {!newUser ? "Create an account" : "Already an account ?"}
          </p>
          <br />
          <button onClick={googleBtn}>Sign in with google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
