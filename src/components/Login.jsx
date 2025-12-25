import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // now validate it
    const message = checkValidData(email.current.value, password.current.value);

    setError(message);
    if(message) return;

    if(!isSignInForm){
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
         email.current.value,
         password.current.value
      )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "-" + errorMessage )
  });
    }else{
      // sign in logic
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "-" + errorMessage);
  });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_small.jpg"
          alt="logo"
        />
      </div>

      {/* <div> */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-5/12 absolute p-12 bg-black/70   my-36 mx-auto right-0 left-0 text-white rounded-2xl"
      >
        <h1 className="font-semibold text-3xl p-2 m-2 flex items-center justify-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full border-amber-50 border-2 rounded-xl"
          />
        )}
        <input
          type="email"
          placeholder="Enter your email"
          ref={email}
          className="p-2 m-2 w-full border-amber-50 border-2 rounded-xl"
        />
        <input
          type="password"
          placeholder="Enter your password"
          ref={password}
          className="p-2 m-2 w-full border-amber-50 border-2 rounded-xl"
        />
        <p className="text-red-700 font-medium">{error}</p>
        <button
          className="p-2 m-2 bg-red-700 w-full rounded-xl cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetflixGpt ? Sign Up Now"
            : "Already registered? Sign In now"}
        </p>
      </form>

      {/* </div> */}
    </div>
  );
};

export default Login;
