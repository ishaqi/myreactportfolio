import  { createContext } from 'react';

export interface Theme {
  theme: 'light' | 'dark';
  setTheme: (newTheme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<Theme>({
  theme: 'light',
  setTheme: () => {},
});