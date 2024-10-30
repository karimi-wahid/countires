
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import SingleCountry from "./pages/SingleCountry"

function App() {

  const router = createBrowserRouter([
    {path: '',
      element: <Home />
    },
    {path: '/country/:name',
      element: <SingleCountry />
    }
  ])

  return <RouterProvider router={router} ></RouterProvider>
}

export default App
