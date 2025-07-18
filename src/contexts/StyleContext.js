import React from "react";

const StyleContext = React.createContext();

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
 
//pre code 


/*import React, { useState } from "react";

const StyleContext = React.createContext();

export const StyleProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // ✅ Start in dark mode

  const changeTheme = () => {
    setIsDark((prevMode) => !prevMode);
  };

  return (
    <StyleContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </StyleContext.Provider>
  );
};

export default StyleContext;

*/