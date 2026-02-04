import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Importing global styles
import App from './App.jsx' // Importing the main layout

// createRoot finds the 'root' div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
