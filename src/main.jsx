import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homesec from './Home/home'
import Err from './err/err'
import Login from './Login/login'
import Product from './product/pro'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Homesec/>,
    errorElement:<Err/>
  },
  { 
  path:"login",
  element:<Login/>
  },
  {
    path:"product/:id",
    element:<Product/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
 