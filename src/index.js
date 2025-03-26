import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { GlobalStyle } from './Styles/GlobalStyles';

import { Provider } from 'react-redux'; // 🧠 Importamos Provider de Redux
import store from './redux/store';      // 🧠 Importamos el store

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* Envolvemos TODO con Provider */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
