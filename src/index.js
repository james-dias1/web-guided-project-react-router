import React from 'react' // with React 17 this import will be gone
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router

render(
  // Wrap the <App /> in a provider
  <App />
  , document.querySelector('#root')
)
