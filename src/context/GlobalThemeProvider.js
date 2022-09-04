import React, { useMemo, useState, createContext } from 'react';

import { ThemeProvider } from 'styled-components';
import themes from "../styles/themes";

export const ThemeContext = createContext("dark");

export function GlobalThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleOnToggleTheme() {
    setTheme(prevState => prevState === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider
      value={{
        onToggleTheme: handleOnToggleTheme,
        selectedTheme: theme
      }}>
      <ThemeProvider theme={currentTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}