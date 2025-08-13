import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from './Context/ApiContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApiProvider>
      <App />
    </ApiProvider>
  </BrowserRouter>,
)
