import React from 'react'
import Statesstrings from "./Hooks/States/Statesstrings";
import Statesupdate from "./Hooks/States/Stateupdate";
import Statearray from "./Hooks/States/Statearray";
import "./Hooks/Styles/Styles.css";
import Effectsoverview from "./Hooks/Effects/Effectsoverview";
import Effectsdependency from "./Hooks/Effects/Effectsdependency";
import Effectsettimeout from "./Hooks/Effects/Effectssettimeout";
import Effectsapicall from "./Hooks/Effects/Effectsapicall";
const App = () => {
  return (
    <>
<Statesstrings/>
<Statesupdate/>
<Statearray/>
<Effectsoverview/>
<Effectsdependency/>
<Effectsettimeout/>
<Effectsapicall/>
</>
  )
}

export default App; 
