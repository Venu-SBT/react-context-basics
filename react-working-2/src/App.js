import React from "react";
import { ThemeContext, themes } from "./context/theme-context";
import Page from './components/Page';
import Section from './components/Section';
import Toolbar from './components/Toolbar';
import ThemedButton from "./components/ThemedButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((prevState) => ({
      theme:
        prevState.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }

  render() {
    // The ThemedButton button inside the ThemeProvider  uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <Page>
        <ThemeContext.Provider value={ { theme: this.state.theme, toggleTheme: this.toggleTheme } }>
          <Toolbar />
        </ThemeContext.Provider>
        <hr />
        {/* <Section>
          <ThemedButton />
        </Section> */}
      </Page>
    );
  }
}

export default App;
