import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobaleStyle from './theme/globaleStyle';
import App from './App';
import Theme from './theme/theme';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobaleStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
