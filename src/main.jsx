import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'

if (process.env.NODE_ENV === 'development') {
    import('./mocks/browser').then(({ worker }) => worker.start())
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
