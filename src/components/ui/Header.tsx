import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full h-12 flex items-center justify-between px-3">
        <span className=" font-bold text-2xl">RQ</span>
        <div className="flex items-center justify-around gap-3 text-sm font-semibold">
            <Link to="/old">Old</Link>
            <Link to="/newRQ">NewRQ</Link>
            <Link to="infinitescroll">Infinite-Scroll</Link>
        </div>
    </div>
  )
}

export default Header;