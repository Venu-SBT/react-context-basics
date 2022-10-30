import React from "react";
import { ThemeContext } from "../context/theme-context";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;     
    let themeCtx = this.context;
    
    return (
      <button {...this.props} onClick= {themeCtx.toggleTheme} style={{backgroundColor: themeCtx.theme.background}} />               
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;