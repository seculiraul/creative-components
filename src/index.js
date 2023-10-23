import React from 'react'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'

const rootElem = document.querySelector('#root')

const root = createRoot(rootElem)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
