
import React from 'react';
import ReactDOM from 'react-dom/client';

import router from "./router/router";
import {RouterProvider} from "react-router-dom";
import './index.css'


//把app渲染到id为root的dom节点上

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //     <RouterProvider router={router}></RouterProvider>
    // </React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

);