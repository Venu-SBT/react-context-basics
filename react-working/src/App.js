import React, { useState } from "react";
import Base from "./components/ Base";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Outside from "./components/Outside";
import { defaultValue, ThemeContext } from "./context/theme-context";
import { UserContext, userDefaultValue } from "./context/user-context";

const App = () => {
  let [theme, setTheme] = useState('light'); 
  let [name, setName] = useState('Venu Koka');

  const modeClickHandler = () => {
    setTheme((prevState) => { return prevState === 'light' ? 'dark' : 'light'});    
  };

  let v = { theme: theme, modeClickHandler: modeClickHandler };

  return (
    <div>
      <button onClick={modeClickHandler}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button>
      <ThemeContext.Provider value={v} >
          <UserContext.Provider value={name}>
             <Header />
          </UserContext.Provider>          
          <Main />
          <Footer />
          <UserContext.Provider value={name}>
             <Base />
          </UserContext.Provider> 
      </ThemeContext.Provider>  
      <Outside />     
    </div>
  )
}

export default App;
