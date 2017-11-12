import React from 'react'

import AppBar from 'material-ui/AppBar'
import FireIcon from 'material-ui-icons/Whatshot'

iconStyle =
  marginTop: 0,
  display: 'flex',
  alignItems: 'center'


App = ->
  <div className='App-root'>
    <AppBar
      title='Address Book'
      iconElementLeft={<FireIcon color='gold' />}
      iconStyleLeft={iconStyle}
    />
  </div>


export default App
