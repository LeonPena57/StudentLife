import React, { Children, PureComponent } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import "./App.css";
import DefaultPage from './views/DefaultPage';
import FirstPage from './views/FirstPage';
import SecondPage from './views/SecondPage';
import NotFound from './views/NotFound';

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