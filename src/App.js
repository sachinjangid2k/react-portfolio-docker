import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <AppContainer>
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App; 