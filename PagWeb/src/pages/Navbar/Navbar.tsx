// import React, { useState } from "react";
import { useState } from "react";


const Navbar: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <nav className="bg-white shadow-lg" >
                <div className="container mx-auto px-4">
                    <div className=" flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <span className="text-xl font-semibold ml-2">WeOne</span>
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Text</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Computadores</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Ciencia</a>
                        </div>

                        <div className=" md:hidden">
                            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </button>


                        </div>

                    </div>
                    {
                        menuOpen && (
                            <div className="md:hidden">
                                <a href="#" className="block py-2  text-gray-700 hover:text-gray-900">About us</a>
                                <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Text</a>
                                <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Computadores</a>
                                <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Ciencia</a>
                            </div>
                        )
                    }

                </div>

            </nav>
        </>
    );

};

export default Navbar