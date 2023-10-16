import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactGA from 'react-ga4';
import App from './App.jsx'
import './index.css'

// const TRACKING_ID = 'G-Z5NJ8QL119';
// ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
