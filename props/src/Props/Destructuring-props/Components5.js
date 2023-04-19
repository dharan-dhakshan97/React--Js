import React from 'react'
import {useState} from 'react';

const Components5 = () => {
const [input,setInput]=useState(0);
function handleClick()
{
    setInput(input+1);
}


  return (
    <>
      <button> onClick={handleClick}Add Items</button>
      <h1>The input value is {input} </h1>
    </>
  );
}

export default Components5;