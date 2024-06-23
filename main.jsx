import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  LoginRegister from "./src/pages/LoginRegister/LoginRegister.jsx";
import FormInvestment from "./src/pages/FormInvestment/FormInvestment.jsx";
import ConsultInvestment from "./src/pages/ConsultInvestment/ConsultInvestment.jsx";
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegister />,
  },

  {
    path: "/invest",
    element: <ChakraProvider>
              <FormInvestment/>
            </ChakraProvider>,
  },

  {
    path: "/consult",
    element: <ConsultInvestment />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
