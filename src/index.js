import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import App from './App'

import * as Colors from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import { app } from './base'

const getTheme = theme =>
  getMuiTheme(theme, {
    palette: {
      accent1Color: Colors.pinkA400,
      primary1Color: Colors.indigo500,
      primary2Color: Colors.indigo700,
      pickerHeaderColor: Colors.blue500
    }
  })

ReactDOM.render(
  <MuiThemeProvider muiTheme={getTheme(baseTheme)}><App /></MuiThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()
