import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Old from "./pages/Old"
import NewRQ from "./pages/NewRQ"
import Detail from "./pages/Detail"
import InfiniteScroll from "./pages/InfiniteScroll"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/old",
          element:<Old/>
        },
        {
          path:"/newRQ",
          element:<NewRQ/>
        },
        {
          path:"detail/:id",
          element:<Detail/>
        },
        {
          path:"/infinitescroll",
          element:<InfiniteScroll/>
        }
      ]
    }
  ]
)
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;