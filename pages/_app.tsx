import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-theme';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
