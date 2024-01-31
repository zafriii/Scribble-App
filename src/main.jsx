import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Auth0Provider
    domain="dev-i4t6go7grrhd3srl.us.auth0.com"
    clientId="2rtEpeqX91Do2ZDF9uAKHm5lR2wCvEfH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />

    </Auth0Provider>
  </React.StrictMode>,
)
