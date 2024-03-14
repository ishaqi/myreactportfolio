import React, {  useState } from 'react';
import { ThemeContext,Theme } from './ThemeContext';


interface MyComponentProps {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme['theme']>('light');
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    const value: Theme = { theme, setTheme: toggleTheme };
  
    return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
  };
  
  export default ThemeProvider;