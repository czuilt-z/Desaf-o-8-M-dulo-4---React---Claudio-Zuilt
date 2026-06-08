import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import UserProvider from "./context/UserContext";
import CartProvider from './context/CartContext';
import PizzaProvider from './context/PizzaContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <CartProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartProvider>
      </PizzaProvider>
    </BrowserRouter>
  </StrictMode>

)
