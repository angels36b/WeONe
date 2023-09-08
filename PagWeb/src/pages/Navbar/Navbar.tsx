// import React, { useState } from "react";
import Menu from "../../components/MenuButton";


const Navbar: React.FC = () => {

    // let Links = [
    //     {name: "Quienes somos", link:"/"},
    //     {name: "Contact",link:"/"}

    // ]; 
    // const [open, setOpen]=useState(false);


    // const [isOpen, setIsOpen] = useState(false);

    // const toggleNavbar = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <>

            <div className="flex items-center justify-between shadow-md w-full fixed top-0 left-0 shrink-0 ">

                <div className=" max-w-7xl mx-auto bg-gradient-to-r py-4 md:px-10 px-7">
                    <div className="flex items-center h-16">
                        <div className="flex-shrink-0">

                        </div>
                        <div className="hidden md:block">
                            <div className=" font-bold font-montserrat text-2xl cursor-pointer font-[Poppins] text-black-80 ">

                                <span className=" text-3xl text-indigo-600 mx-9 pt-2 hover:text-white">
                                    Who we?
                                </span>

                                <span className="text-3xl text-indigo-600 mx-9 pt-2">
                                    proccess
                                </span>

                                <span className="text-3xl text-indigo-600 mx-9 pt-2">
                                    computer
                                </span>

                            </div>
                        </div>
                        <div className="mr-2 flex md:hidden">
                            
                                <Menu />
                            
                        </div>

                    </div>

                </div>

            </div>
        </>
    );

};

export default Navbar