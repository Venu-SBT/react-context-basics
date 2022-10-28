import React from 'react'
import { ThemeContext } from '../context/theme-context';
import { UserContext } from '../context/user-context';

class Base extends React.Component {  
  render() {
    return (
      <div style={{ fontSize: "40px", backgroundColor: "tomato", color: "white" }}>
        <ThemeContext.Consumer>
            {(obj) => { return <h1>My Base Component : {obj.theme} </h1> }}
        </ThemeContext.Consumer>        
        <UserContext.Consumer>
            {(value) => { return <h1>Good Bye {value}!!</h1>} }
        </UserContext.Consumer>
        <ThemeContext.Consumer>
            {(obj) =>  (
                   <UserContext.Consumer>
                    {(n) => { return <h1>{n} is enjoying the {obj.theme} theme now!!</h1> }}
                   </UserContext.Consumer>                   
                ) }
        </ThemeContext.Consumer>           
      </div>
    )
  }
};

export default Base; 