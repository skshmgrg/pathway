import React from 'react'
import { useContext } from "react";
import { functionsContext } from "../context/context";
import  Searches from "./Searches";



function Previoussearch() {
    const functions = useContext(functionsContext);
  return (
    <div className='max-w-[30vw]'>
        {functions.messages
        .filter((value) => value.type === "prompt")
        .map((value, index) => (
          <Searches key={index} text={value.text} />
        ))}
    </div>
  )
}

export default Previoussearch;


