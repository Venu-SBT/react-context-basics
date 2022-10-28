import React from 'react';
import { ThemeContext } from '../context/theme-context';

const Button = () => {
  return (
    <ThemeContext.Consumer>
       {(obj) => <button onClick={obj.modeClickHandler}>Switch to {obj.theme === 'light' ? 'dark' : 'light'} mode</button> }
    </ThemeContext.Consumer>
    
  )
}

export default Button;