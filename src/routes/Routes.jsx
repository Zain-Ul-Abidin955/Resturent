import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "../modules/landingPage/pages/LandingPage";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Landingpage />,
      }
]);
const Routes = () => {

  return <RouterProvider router={router}> </RouterProvider>;

};

export default Routes; 
