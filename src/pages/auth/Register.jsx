import React from "react";

const Register = () => {
  return (
    <>
      <div className="bg-secondary-100 flex flex-col items-center justify-center gap-4 p-8 rounded-xl">
        <h1 className="text-3xl uppercase font bold tracking-[5px] text-white font-medium">
          Create an <b className="text-primary">account</b>
        </h1>
        <button
          type="submit"
          className="flex items-center justify-center gap-4 p-2"
        >
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google.com"
            className="h-4 w-4"
          />
          Register with Google
        </button>
        <form action="" className="grid items-center gap-3">
          <div className="relative grid gap-4">
            <input
              type="text"
              placeholder="User Name"
              className="p-2 rounded-xl text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-xl text-black"
            />
            <input
              placeholder="Password"
              maxLength={20}
              className="p-2 rounded-xl text-black"
            />{" "}
            <input
              type="password"
              placeholder="Confirm Password"
              maxLength={20}
              className="p-2 rounded-xl text-black"
            />{" "}
          </div>
          <button
            to="/"
            type="submit"
            className="flex items-center justify-center gap-4 bg-primary hover:bg-primary/80 py-1 rounded-xl font-medium text-black hover:text-white"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
