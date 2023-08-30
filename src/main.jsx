import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Erro from './routes/Error/index.jsx'
import Aparelhos from './routes/Aparelhos/index.jsx'
import VisualizarAparelhos from './routes/VisualizarAparelhos/index.jsx'

  const router = createBrowserRouter([
    {
      path: "/", element: <App />, errorElement: <Erro />,
      children : [
        {path : "/", element: <Home />},
        {path : "/aparelhos", element : <Aparelhos />},
        {path : "/visualizar/aparelhos/:id", element : <VisualizarAparelhos />},
        {path : "/antiga", element : <Navigate to="/"/>}

      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
