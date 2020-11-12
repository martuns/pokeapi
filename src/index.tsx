import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from "@chakra-ui/core"

import App from './App';
import theme from "./theme"


ReactDOM.render(
  <React.StrictMode>
     <ChakraProvider resetCSS theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

