import React, { useState } from "react";
import { Link } from "react-router-dom";

//Icons
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-secondary-100 flex flex-col items-center justify-center gap-4 p-8 rounded-xl">
        <h1 className="text-3xl uppercase font bold tracking-[5px] text-white font-medium">
          Log In
        </h1>
        <button
          type="submit"
          className="flex items-center justify-center gap-4 p-3 rounded-xl"
        >
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google.com"
            className="h-4 w-4"
          />
          Login with google
        </button>
        <form action="" className="flex flex-col gap-3">
          <div className="relative flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-xl text-black"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              maxLength={20}
              className="p-2 rounded-xl text-black"
            />{" "}
            {showPassword ? (
              <FaRegEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-3 text-black hover:cursor-pointer"
              />
            ) : (
              <FaRegEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-3 text-black hover:cursor-pointer"
              />
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-4 bg-primary hover:bg-primary/80 py-1 rounded-xl font-medium text-black hover:text-white"
          >
            Login
          </button>
        </form>
        <div>
          <Link>Recover password ?</Link>
        </div>
        <div className="flex items-center gap-2">
          <p>You do not have an account ?</p>
          <Link to="/auth/register" className="text-primary hover:text-primary/80">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
