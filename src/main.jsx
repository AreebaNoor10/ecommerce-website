import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './context/ShopContext.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <ShopContextProvider>
          <ToastContainer />
          <App />
        </ShopContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
