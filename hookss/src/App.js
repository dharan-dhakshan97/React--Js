import React from 'react'
import Statesstrings from "./Hooks/States/Statesstrings";
import Statesupdate from "./Hooks/States/Stateupdate";
import Statearray from "./Hooks/States/Statearray";
import Crudobjects from "./Hooks/Crud-Operations/Crudobjects";
import "./Hooks/Crud-Operations/Styles/Style.css";
const App = () => {
  return (
    <>
<Statesstrings/>
<Statesupdate/>
<Statearray/>
<Crudobjects/>
</>
  )
}

export default App; 
