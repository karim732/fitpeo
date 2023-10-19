import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/sidenav/NavBar";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="d-flex">
      <NavBar
        onToggle={(isToggled) => {
          setToggle(isToggled);
        }}
        toggled={toggle}
      />
      <Dashboard
        toggled={toggle}
        onToggle={() => {
          setToggle(!toggle);
        }}
      />
    </div>
  );
}

export default App;
