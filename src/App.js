import React, { useContext, useEffect, useState } from 'react';

import { GlobalThemeProvider } from "./context/GlobalThemeProvider";

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

function App() {
  return (
    <GlobalThemeProvider>
      <GlobalStyle />
      <Layout />
    </GlobalThemeProvider>
  );
};

export default App;
