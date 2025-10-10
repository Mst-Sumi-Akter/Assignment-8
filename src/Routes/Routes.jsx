import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
     errorElement:<ErrorPage/>,
    children: [
         {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/apps",
    element: <Apps/>,
  },
  {
        path: "/apps/:id", 
        element: <AppDetails/>,
      },
      {
       path: "/installation",
       element: <Installation />,
      },

    ]
  },
 

]);
export default router