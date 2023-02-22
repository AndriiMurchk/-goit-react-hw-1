import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}


const theme = {
  colors: {
    green:'#119200',
    red: '#ee0000',
    random:generateColor(),
  },
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
