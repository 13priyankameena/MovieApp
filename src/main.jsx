import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'
import axios from "axios";
import {store} from './store/store.jsx'
import { Provider } from 'react-redux'

// setup axios
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
<RouterProvider router={routes}/>
    </Provider>
    
  // </StrictMode>,
)
