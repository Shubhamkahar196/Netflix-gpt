import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />

    <div className="absolute" >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_small.jpg" alt="logo" />
    </div>

    {/* <div> */}
        <form action="#" className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0">
            <input type="email" placeholder="Enter your email" className="p-2 m-2" />
            <input type="password" placeholder="Enter your password" className="p-2 m-2" />
            <button className="p-4 m-4">Sign In</button>
        </form>

    {/* </div> */}
    </div>
  );
};

export default Login;
