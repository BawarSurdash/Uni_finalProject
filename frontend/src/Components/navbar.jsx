import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="h-25 w-32 object-contain hover:opacity-80 transition-opacity duration-300" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="flex-grow hidden md:flex items-center justify-center space-x-8">
                        <Link to="/" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/about" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/events" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Latest Events
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/services" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/contact" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Profile Icon */}
                    <div className="flex-shrink-0">
                        <Link to="/profile" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-300">
                            <CgProfile className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;