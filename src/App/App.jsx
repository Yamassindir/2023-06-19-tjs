import React from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

const App = (props) => {
  return (
    <div className="App">
      <Button>
        <div>coucou</div>
        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/check-256.png" alt="ok" />
      </Button>
      <Button >DEMAT BREIZH</Button>
      <Button >
        <div>rtyuio</div>
      </Button>
      <Button text="fghjkl" />
    </div>
  );
};

export default App;
