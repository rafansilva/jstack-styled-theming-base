import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/GlobalThemeProvider';

import { Container } from './styles';

export default function Header() {
  const { selectedTheme, onToggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Componente H");
  }, [])

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={() => onToggleTheme()}
      >
        {selectedTheme === "dark" ? "🌝" : "🌚"}
      </button>
    </Container>
  );
}