import { useState } from "react";
import Accordion from "./components/Accordion/Accordion";
import Carousel from "./components/Carosel/Carousel";
import Data from "./components/DataAnalysis/Data";
import Navbar from "./components/NavBar/NavBar";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div data-theme={theme} className="App">
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Data />
      <Accordion />
      <Carousel />
    </div>
  );
}

export default App;
