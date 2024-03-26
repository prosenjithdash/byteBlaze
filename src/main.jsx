import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './Components/MainRoot/MainRoot';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Error from './Pages/Error/Error';
import Bookmarks from './Pages/Bookmarks/Bookmarks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
      {
        path: '/bookmarks',
        element:<Bookmarks></Bookmarks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
