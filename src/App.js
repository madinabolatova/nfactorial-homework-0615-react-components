import { useState } from "react";
import { DefaultContext } from "./Context";
import { ThemeContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState("night");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const handleSetTheme = () => {
    setTheme((prevTheme) => prevTheme === "night" ? "day" : "night")
  };

  return (
    <DefaultContext.Provider value={{ handleCreateFan}}>
      <ThemeContext.Provider value={{handleSetTheme, theme}}>
        <Header fan={fan}/>
        <hr />
        <Content/>
        <Footer/>
      </ThemeContext.Provider>
    </DefaultContext.Provider>
  );
}
