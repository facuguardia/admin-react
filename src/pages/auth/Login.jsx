import React, { useState } from "react";
//Icons
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-secondary-100 flex flex-col items-center justify-center gap-4 p-8 rounded-xl">
      <h1 className="text-3xl uppercase font bold tracking-[5px] text-white font-medium">
        Log In
      </h1>
      <form action="" className="flex flex-col gap-3">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded-xl text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-xl text-black"
          />{" "}
          <FaRegEye className="absolute top-1/2 -translate-y-1/2 right-2 text-black" />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-4 bg-blue-500 py-1 rounded-xl font-medium"
        >
          Login
        </button>
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
      </form>
    </div>
  );
};

export default Login;
