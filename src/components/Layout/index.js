import React, { useContext, useEffect, useRef } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';
import { ThemeContext } from '../../context/GlobalThemeProvider';
/* import { useTheme } from 'styled-components'; */

export default function Layout() {
  /*   const theme = useTheme(); */
  const { selectedTheme } = useContext(ThemeContext);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.debug({ selectedTheme });
  }, [selectedTheme]);

  return (
    <>
      <Header />
      <PostsList />
      <Footer />


      {/* useTheme in inline-styles

      <div
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          padding: 24
        }}
      >
        <span>Oi tudo bem com você?</span>
      </div> */}
    </>
  );
}
