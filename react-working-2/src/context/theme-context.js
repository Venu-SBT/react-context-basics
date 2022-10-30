import React from "react";

const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

// Make sure the shape of the default value passed to createContext matches the shape that the consumers expect!
const ThemeContext = React.createContext({ 
  theme: themes.dark , 
  toggleTheme: () => {} 
});

ThemeContext.displayName = "ThemeContext";  //Default : Context.Provider, Context.Consumer in React DevTools

export { themes, ThemeContext };