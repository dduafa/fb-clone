import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider, signInWithPopup } from "../../config/firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png"
          alt=""
        />
        <img
          src="https://wwww.logo.winw/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
