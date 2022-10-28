import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import { UserContext } from '../context/user-context';

const Header = (props) => {
  const t = useContext(ThemeContext); 
  const n = useContext(UserContext);

  return (
    <header>
      <h1>{n} Header : {t.theme}</h1>     
    </header>
  )
}

export default Header;