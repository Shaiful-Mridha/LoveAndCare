import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "././layout/Main/Main";
import Moon from "./components/Moon/Moon";
import Love from "./components/Love/Love";
import Life from "./components/Life/Life";
import Shaif from "./components/Shaif/Shaif";
import Pain from "./components/Pain/Pain";
import Last from "./components/Last/Last";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Life></Life>,
      },
      {
        path: "/moon",
        element: <Moon></Moon>,
      },
      {
        path: "/love",
        element: <Love></Love>,
      },
      {
        path: "/shaif",
        element: <Shaif></Shaif>,
      },
      {
        path: "/pain",
        element: <Pain></Pain>,
      },
      {
        path: "/last",
        element: <Last></Last>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode className="head">
    <RouterProvider className="head" router={router} />
  </React.StrictMode>
);
