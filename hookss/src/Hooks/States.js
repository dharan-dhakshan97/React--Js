import React from 'react';
import {useState} from 'react';

const States = () => {

const [incre,setIncre]=useState(0);

function increment()
{
  setIncre(incre+1);
}


const [decre,setDecre]=useState(1);
function decrement()
{
  setDecre(decre-1);
}


  return (
    <>

    <h1>The Increment Value is : {incre}</h1>
    <button onClick={increment}>Increment</button>


<h1>The Decrement Value is:{decre}</h1>
<button onClick={decrement}>Decrement</button>






    </>
  )
}

export default States;