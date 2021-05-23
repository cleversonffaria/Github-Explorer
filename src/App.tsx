import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyled } from './styles';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyled />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
