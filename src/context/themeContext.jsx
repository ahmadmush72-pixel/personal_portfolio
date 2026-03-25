import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const default_values = {
  theme: "light",
  toLight: () => {},
  toDark: () => {},
};

export const themeContext = createContext(default_values);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toLight() {
    setTheme("light");
  }
  function toDark() {
    setTheme("dark");
  }
  return (
    <themeContext.Provider value={{ theme, toLight, toDark }}>
      {children}
    </themeContext.Provider>
  );
};
export const useTheme = () => useContext(themeContext);
