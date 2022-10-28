import React from "react";

const defaultValue = { theme: 'light', modeClickHandler: () => {} };

const ThemeContext = React.createContext();  // ThemeContext.Provider, ThemeContext.Consumer
ThemeContext.displayName = 'MyCustomTheme';

export { defaultValue, ThemeContext };
