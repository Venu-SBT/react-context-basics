import React from 'react';
import { ThemeContext } from '../context/theme-context';
import Button from './Button';

const User = () => {
  return (
    <div>
        <ThemeContext.Consumer>
          {(t) => (
            <h1>My Main : {t.theme}</h1>
          )}
        </ThemeContext.Consumer>
        
        <h3>Guest User</h3>
        <Button />        
    </div>
  )
}

export default User;