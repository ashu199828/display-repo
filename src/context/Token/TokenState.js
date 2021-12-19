import React from "react";
import TokenContext from "./TokenContext";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";

const TokenState = (props) => {
  const [tokenValue, setTokenValue] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyB-TnbDW8qEy1hVheKEgnMPh-k4h1crlkM",
    authDomain: "new-project-14322.firebaseapp.com",
    projectId: "new-project-14322",
    storageBucket: "new-project-14322.appspot.com",
    messagingSenderId: "833403576500",
    appId: "1:833403576500:web:ac80aab6b55402cf75f7e1",
    measurementId: "G-24DQS8N4BT",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const signInAuth = (provider) => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // console.log(token)

        setTokenValue(token);
        localStorage.setItem("token", token);

        // The signed-in user info.
        const user = result?.user?.reloadUserInfo?.screenName;

        console.log(user);

        localStorage.setItem("user", user);

        if (user) {
          window.location = "/home";
        } else {
          window.location = "/";
        }
        // ...
      })
      .catch((error) => {
        window.location = "/";
      });
  };

  return (
    <TokenContext.Provider value={{ tokenValue, signInAuth }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenState;
