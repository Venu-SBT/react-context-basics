import React from "react";

let userDefaultValue = '';

const UserContext = React.createContext(userDefaultValue);
UserContext.displayName = 'UserContext';

export { UserContext, userDefaultValue };
