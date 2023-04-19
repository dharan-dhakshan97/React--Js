import Component1 from "./Props/props/Component1";
import Component2 from "./Props/props/Component2";
import Component3 from "./Props/props/Component3";
import Component4 from "./Props/props/Component4";
import Components1 from "./Props/Destructuring-props/Components1";
import Components2 from "./Props/Destructuring-props/Components2";
import Components5 from "./Props/Destructuring-props/Components5";
import Components6 from "./Props/Destructuring-props/Components6";
function App() {
  return (
    <>
      <Component1 name="Parent component to child component" />
      <Component2 />
      <Component3 />
      <Component4 />
      <Components1 />
      <Components2 />
      <Components5/>
      <Components6/>
    </>
  );
}

export default App;
