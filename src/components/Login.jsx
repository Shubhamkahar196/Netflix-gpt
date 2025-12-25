import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  
  const [isSignInForm, setIsSignInForm] =  useState(true)

  const toggleSignInForm = ()=>{
setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />

    <div className="absolute" >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_small.jpg" alt="logo" />
    </div>

    {/* <div> */}
        <form action="#" className="w-5/12 absolute p-12 bg-black/70   my-36 mx-auto right-0 left-0 text-white rounded-2xl">
        <h1 className="font-semibold text-3xl p-2 m-2 flex items-center justify-center">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
           {!isSignInForm && (
                        <input type="text" placeholder="Full Name" className="p-2 m-2 w-full border-amber-50 border-2 rounded-xl" />
           )}
            <input type="email" placeholder="Enter your email" className="p-2 m-2 w-full border-amber-50 border-2 rounded-xl" />
            <input type="password" placeholder="Enter your password" className="p-2 m-2 w-full border-amber-50 border-2 rounded-xl" />
            <button className="p-2 m-2 bg-red-700 w-full rounded-xl cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? "New to NetflixGpt ? Sign Up Now" : "Already registered? Sign In now"}</p>
        </form>

    {/* </div> */}
    </div>
  );
};

export default Login;
