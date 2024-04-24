import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
        <ul className="flex justify-between items-center">
            <li>
                <Link to='/' className="text-white font-bold">Home</Link>
            </li>
            <li>
                <Link to="/friends" className="text-white font-bold ml-4">Friends</Link>
            </li>
            <li>
                <Link to="/notifications" className="text-white font-bold ml-4">Notifications</Link>
            </li>
            <li>
                <Link to="/profile" className="text-white font-bold ml-4">Profile</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;