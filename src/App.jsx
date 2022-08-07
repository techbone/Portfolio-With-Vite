import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
