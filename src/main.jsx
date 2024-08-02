import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import Blog from './components/Blog/Blog.jsx'
import TempleInfo from './components/TempleInfo/TempleInfo.jsx'


const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Login/>
      },
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'signup',
        element:<Register/>
      },
      {
        path:'profile',
        element:<Profile/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'user/:user_Id',
        element:<User/>
      },
      {
        path:'github',
        element:<Github/>
      },
      {
        path:'temple/:templeId',
        element:<TempleInfo/>
      },
      {
        path:'home/chardham/:Id',
        element:<TempleInfo/>
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
