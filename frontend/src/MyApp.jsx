import React from "react";
import {Navbar} from "./components/Navbar";
import Todocom from "./components/Todocom";

const MyApp = () => {
  titles=["hello","hello","hello"]
  let i=1
  return (
    <>
      <Navbar />
      
      {titles.map((title, index) => (
        <Todocom key={index} title={title} sno={i++}/>
      ))}
    </>
  );
};

export default MyApp;
