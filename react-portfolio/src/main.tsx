import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx'
// import About from './pages/about.tsx'
// import Contact from './pages/contact.tsx'
// import Portfolio from './pages/portfolio.tsx'
// import Resume from './pages/resume.tsx'
// import Error from './pages/error.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />
    children:[
      {
        index: true,
        // element: <About />
      },
      {

      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
