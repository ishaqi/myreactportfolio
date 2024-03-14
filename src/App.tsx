import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './ThemeContext';
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { theme } = useContext(ThemeContext); // No type casting needed

  return (
      <div style={{
        background: theme === 'dark' ? "black" : "",
        color: theme === 'light' ? "white" : "",
      }}>
      <Navbar/>
      </div>
  )
}

export default App
