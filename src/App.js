import React from 'react'

import AppBar from 'material-ui/AppBar'
import FireIcon from 'material-ui-icons/Whatshot'

const App = props => (
  <div className='App-root'>
    <AppBar
      title='Address Book'
      iconElementLeft={<FireIcon color='gold' />}
      iconStyleLeft={{
        marginTop: 0,
        display: 'flex',
        alignItems: 'center'
      }}
    />
  </div>
)

export default App
