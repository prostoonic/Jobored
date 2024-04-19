import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Vacansy from './pages/vacansy'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
     path: "/vacansy",
     element: <Vacansy />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <RouterProvider router={router} />
	</React.StrictMode>
)