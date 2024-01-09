import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn text-xl">Todos</a>
        </div>
        <div className="navbar-center">
        <a className="btn text-xl">addtodo</a>
        </div>
        <div class="navbar-end m-2">
          <a class="btn m-2">login</a>
          <a class="btn m-2">signup</a>
        </div>
      </div>
      <hr className="border-t-2 border-black" />
    </>
  );
};
