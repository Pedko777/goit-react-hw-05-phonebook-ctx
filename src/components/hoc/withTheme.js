import React from 'react';
import ThemeContext from "../../context/ThemeContext";

const withTheme = WrappedComponent => {
    return function WithTheme(props) {
      return (
        <ThemeContext.Consumer>
          {({themeConfig, theme, themeToggle}) => (
            <WrappedComponent
              {...props}
              themeConfig={themeConfig}
              theme={theme}
              toggle={themeToggle}
            />
          )}
        </ThemeContext.Consumer>
      );
    };
  };
  
  export default withTheme;