import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './configureStore'
import Root from './components/Root'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css'

const store = configureStore();


render(
  <MuiThemeProvider>
    <Root store={store}/>
  </MuiThemeProvider> ,
  document.getElementById('root')
)
