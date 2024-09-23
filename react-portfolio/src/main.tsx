import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
// import Resume from './pages/Resume.tsx'
import Error from './pages/Error'

// WAS FROM PREVIOUS MODULE CHALLENGE #2 ; MESSUS UP THE STYLING
// import './index.css' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <About />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
