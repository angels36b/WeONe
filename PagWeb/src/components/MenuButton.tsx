import React, {useState} from "react";
import './MenuButton.css'


const MenuButton = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <div className="menu-button">
            <button onClick={toggleMenu}
                className="text-purple-500 hover:text-blue-500 focus:outline-none"
            >
                <svg
                    className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>

                <svg
                    className={`w-6 h-6 ${menuOpen ? 'block' : 'hidden'}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <div className={`md:flex ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="md:flex space-x-4 mt-4 md:mt-0">
                    <li>
                        <a href="#" className="text-black hover:text-blue-500">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-blue-500">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>


    );
};

export default MenuButton