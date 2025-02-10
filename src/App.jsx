import React, { Children, PureComponent } from 'react'
import { RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import "./App.css";

const router = createBrowserRouter([
  { 
    path: "/StudentLife/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "first",
        element: <FirstPage />,
      },
      {
        path: "second",
        element: <SecondPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    },
    ]);

    function App() {
      return (
        <RouterProvider router={router} />
      );
    }

    export default App;