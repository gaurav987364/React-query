import { Outlet } from "react-router-dom"
import Header from "../components/ui/Header"

const MainLayout = () => {
  return (
    <div>
        <Header/>
        <main className=" w-full h-[86vh] bg-slate-900">
          {/* Your component content here */}
          <Outlet/>
        </main>
        <footer className=" w-full mx-auto ">
          <p className=" text-center">2025 My Website. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default MainLayout