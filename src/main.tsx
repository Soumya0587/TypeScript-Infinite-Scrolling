
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fortawesome/fontawesome-free/css/all.css';
import { ChakraProvider } from '@chakra-ui/react'
// import './index.css'
import {BrowserRouter} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </ChakraProvider>
  ,
)
