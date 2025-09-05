// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// --- Add this block ---
const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')
if (redirect) {
  const newUrl = '/lumbini-technologies-website' + redirect
  window.history.replaceState({}, '', newUrl)
}
// --- End block ---

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)