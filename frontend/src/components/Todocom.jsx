import React from "react";

const Todocom = (props) => {
  return (
    <>
      <div className="navbar bg-white m-2">
        <div className="navbar-start">
          <a className="text-xl text-gray-900">{props.sno}</a>
          <a className="text-xl ml-5 text-gray-900">{props.title}</a>
        </div>
        <div class="navbar-end">
          <a class="btn mr-4">Completed</a>
        </div>
      </div>
    </>
  );
};

export default Todocom;
