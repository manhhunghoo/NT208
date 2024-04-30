import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
//import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider theme={theme} store={store}>
    <CssBaseline />
    <App />
  </Provider>
  //</React.StrictMode>
)
