import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const Outside = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>Outside : {theme}</div>
  )
}

export default Outside