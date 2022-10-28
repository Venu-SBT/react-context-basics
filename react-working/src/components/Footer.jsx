import React from 'react';
import { ThemeContext } from '../context/theme-context';


class Footer extends React.Component {
  //static contextType = ThemeContext;    // Using the experimental public class fields syntax

  render() {
    let { theme: t } = this.context;  //{ theme: theme, modeClickHandler: modeClickHandler };
    return (
      <footer>
        <h1>My Footer : {t}</h1>            
      </footer>
    )
  }
}

Footer.contextType = ThemeContext;

export default Footer;