import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.js'
import ProfilePage from './pages/ProfilePage.js'
import NotFoundPage from './pages/NotFoundPage.js'
import SorteoComida from './pages/SorteoComida.js'

const router = createBrowserRouter([
  {
  path:"/",
  element:<HomePage/>,
  errorElement: <NotFoundPage/>
  },
  {
    path:"/SorteoComida",
    element:<ProfilePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    //como valido que seed es valido
    path:"/SorteoComida/:seed",
    element:<SorteoComida/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:"/error",
    element:<NotFoundPage/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
