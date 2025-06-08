import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Appointments from './pages/Appointments.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home /> },
      {path: 'services', element: <Services />},
      {path: 'appointments', element: <Appointments />},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
