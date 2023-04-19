import React from 'react'
import Component2 from "../props/Component2";
const Component1 = (props) => {
  return (
   <>
   
   <Component2 name="This is first component to second component"/>
   <h1>{props.name}</h1>
   
   </> 
  )
}

export default Component1;