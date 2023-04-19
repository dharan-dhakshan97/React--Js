import React from 'react';
import Components2 from "../Destructuring-props/Components2";

const Components1 = ({name,value}) => {
  return (
    <>
    
    <h1>I know {name} and it is a {value} library</h1>
    
    <Components2/>
    </>
  )
}

export default Components1;