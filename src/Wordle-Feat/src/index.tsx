import { StrictMode } from 'react'
import * as ReactDOMClient from 'react-dom/client'
// @ts-ignore
import Profile from './components/Profile.jsx'
import App from './App'


const rootElement = document.getElementById('root')!
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
    <Profile/>
  </StrictMode>
)
