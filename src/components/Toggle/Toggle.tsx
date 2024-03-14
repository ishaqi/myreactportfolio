import  { useContext } from "react";
import "./Toggle.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

// import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { ThemeContext } from "../../ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext); // No type casting needed
  const handleClick = () => {
    // debugger
    setTheme(theme === 'light' ? 'dark' : 'light')  };
  return (
    <div className="toggle" onClick={handleClick}>
      <FaMoon color="orange"/>
      <FaSun color="orange"/>
      <div
        className="t-button"
        style={theme === 'light' ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
