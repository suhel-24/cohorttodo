import React from "react";
import { Navbar } from "./components/Navbar";
import Todocom from "./components/Todocom";

const MyApp = () => {
  const titles = [
    { id: 1, text: "hello1" },
    { id: 2, text: "hello2" },
    { id: 3, text: "hello3" },
  ];
  let i=1;
  
  return (
    <>
      <Navbar />
      {titles.map((title) => (
        <Todocom key={title.id} title={title.text} sno={i++}/>
      ))}
    </>
  );
};

export default MyApp;
