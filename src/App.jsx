import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Home />
      <About />
    </>
  );
}

export default App;
