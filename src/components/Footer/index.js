import React, { useContext } from 'react';
import { ThemeContext } from '../../context/GlobalThemeProvider';

import { Container } from './styles';

export default function Footer() {
  const { selectedTheme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={() => onToggleTheme()}
      >
        {selectedTheme === "dark" ? "🌝" : "🌚"}
      </button>
    </Container>
  );
}