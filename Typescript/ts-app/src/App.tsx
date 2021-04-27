import React from "react";
import TextField from "./TextField";

import "./App.css";

// Props
// Hooks
// Render props

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text="Hello" person={{ firstName: "", lastName: "" }} />
    </div>
  );
};

export default App;
