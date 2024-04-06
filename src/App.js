import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Base from "./pages/base";
import { ReactDOM } from "react";
import Resume from './pages/Resume';
import ReadMore from './pages/ReadMore';
import WebDev from './pages/WebDev';
import BugHunting from './pages/BugHunting';
import FlutterDev from "./pages/FlutterDev";
import Scroll_effect from "./pages/Scroll_effect";
import Glowing_btn from "./pages/Glowing_btn";
import Beating_heart from "./pages/Beating_heart";
import Bulb_anim from "./pages/Bulb_anim";
import Earth_rot from "./pages/Earth_rot";
import Error404 from "./pages/Error404";
import Python from "./pages/python";
import Big_data from "./pages/Big_data";
import ML_DS from "./pages/ML_DS";
import Thanks from "./pages/Thanks";

function App() {
  let Allroutes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Base />
      },
      {
        path: "/Resume",
        element: <Resume />
      },
      {
        path: "/Readmore",
        element: <ReadMore />
      },
      {
        path: "/python",
        element: <Python />
      },
      {
        path: "/Big_data",
        element: <Big_data />
      },
      {
        path: "/ML_DS",
        element: <ML_DS />
      },
      {
        path: "/WebDev",
        element: <WebDev />
      },
      {
        path: "/BugHunting",
        element: <BugHunting />
      },
      {
        path: "/FlutterDev",
        element: <FlutterDev />
      },
      {
        path: "/Scroll_effect",
        element: <Scroll_effect />
      },
      {
        path: "/Glowing_btn",
        element: <Glowing_btn />
      },
      {
        path: "/Beating_heart",
        element: <Beating_heart />
      },
      {
        path: "/Bulb_anim",
        element: <Bulb_anim />
      },
      {
        path: "/Earth_rot",
        element: <Earth_rot />
      },
      {
        path: "*",
        element: <Error404 />
      },
      {
        path: "/Thanks",
        element: <Thanks/>
      }
    ]
  )
  return (
    <>
      <RouterProvider router={Allroutes} />

    </>
  );
}

export default App;
