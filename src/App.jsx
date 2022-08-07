import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
