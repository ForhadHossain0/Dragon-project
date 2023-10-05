import { createBrowserRouter,  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../elements/Home";
import Login from "../elements/Login";
import Register from "../elements/Register";
import NewsDetails from "../elements/NewsDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/newsdetails',
          element: <PrivetRoute>  <NewsDetails></NewsDetails>  </PrivetRoute>
        }
        
      ]
    },
  ]);

  export default router;