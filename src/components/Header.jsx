import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/useSlice";

const Header = () => {
  const navigate = useNavigate();
 

  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)

  const handleSignIn = () => {
    navigate("/");
  };

  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="relative ">
      <img
        className="absolute top-0 left-0 w-60 bg-linear-to-b p-2 m-2"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="logo"
      />
      {user ? (
        <button
          onClick={handleSignOut}
          className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 mt-12"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 mt-12"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;
