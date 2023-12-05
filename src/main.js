import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import reportWebVitals from './reportWebVitals'
// import { Provider } from 'react-redux'
// import store from './store'

console.log('app')
// store={store}
const appElement = document.getElementById('app')
if (appElement) {
  createRoot(appElement).render(
    // <Provider>
    <App />
    // </Provider>
  )
}