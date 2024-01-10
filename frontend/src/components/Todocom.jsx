import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const Todocom = (props) => {
  const [show, setShow] = useState(false);

  const handleTitleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className='navbar bg-black m-2 ${isClicked ? "blurred" : ""}'>
        <div className="navbar-start cursor-pointer" onClick={() => handleTitleClick()}>
          <a className="text-xl">{props.sno}</a>
          <a className="text-xl ml-5">{props.title}</a>
        </div>
        <div className="navbar-end">
          <a className="btn mr-4">EditTodo</a>
          <a className="btn mr-4">Completed</a>
        </div>
      </div>
      {show && (
        <div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 ">
            <div>
              Title:{props.title}
              <br />
              Title:{props.title}
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end items-start mt-40 mr-10">
            <IoIosClose className=" bg-white text-4xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default Todocom;
