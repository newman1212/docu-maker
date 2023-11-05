import './index.css';
import * as React from "react";

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './Store/store';
import ReactDOM from 'react-dom/client';
import Navbar from './Routes/Navigation/nav-bar'
import TemplatesContainer from './Routes/Templates-Page/templates-container';
import DocPage from './Routes/Doc-Page/doc-container';
import StylesPreview from './Routes/Styles-Preview/styles-preview';
import ErrorPage from './Routes/Error/error';
import Home from './Routes/Home/Home';
import EditingHub from './Routes/EditingHub/editinghub';
import SignIn from './Routes/Sign-In/sign-in';
import SignUp from './Routes/Sign-Up/sign-up';
import DocView from './Components/Doc-view/doc-view';
import TempsPick from './Routes/Template-Pick-Page/temp-pick-page'
import DownloadButton from './Components/Download-Button/download-button'




const router = createBrowserRouter(

  [
    {element: <Navbar/>,
     errorElement: <ErrorPage />,
    children: [
       {
    path: "/",
    element:  <Home/>, 
  },
  {
    path: "templates",
    element:  <TemplatesContainer/>,
  },

  {
    path: "sign-in",
    element:  <SignIn/>,
  },
      {
    path: "sign-up",
    element:  <SignUp/>,
  },
  



  ] 

  },

     { path: "download",
     element: <DownloadButton/>


  },

     {
    element:  <EditingHub/>,
    children: [ 
          {path:'edit',
          element: <DocView/>,
  }
      ]
  },


      {
     element:
      <DocPage/>,
      children:[{

        path:'preview',
        element:  <DocView/>,

              }]


  },

   {
    element:  <StylesPreview/>,
    children: [ 
          {path:'styles',
          element: <TempsPick/>,
  }
      ]
  },

 
   ]

);



ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode store={store}>
     <Provider store={store}>
      <RouterProvider store={store} router={router} />
       </Provider>
    </React.StrictMode>
);




