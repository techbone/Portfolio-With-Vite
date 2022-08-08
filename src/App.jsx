import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
