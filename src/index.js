import React from 'react';
import ReactDOM from 'react-dom/client'; // ← Importa desde 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme'; // Asegúrate que la ruta es correcta
import { GlobalStyle } from './Styles/GlobalStyles';

// Crea el root con la nueva API
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);