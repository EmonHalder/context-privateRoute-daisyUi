import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import About from './components/About.jsx';
import UserProvider from './providers/UserProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import Orders from './components/Orders';
import Profailo from './components/Profailo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path: '/',
       element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profailo></Profailo></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UserProvider>
     <RouterProvider router={router} />
     </UserProvider>
  </React.StrictMode>,
)
