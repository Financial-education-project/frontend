import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import FormInvestment from './src/pages/FormInvestment/FormInvestment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // 2. Wrap ChakraProvider at the root of your app */}
    <ChakraProvider>
      <FormInvestment/>
    </ChakraProvider>
  </React.StrictMode>
);
