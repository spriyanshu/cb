
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };

    const closeMenu = () => {
        setMenuVisibility(false);
    };

    // const scrollToTop = () => {
    //     scroll.scrollToTop({ smooth: true });
    // };

    return (
        <div className="relative font-sans">
            <nav className="relative px-8 py-8 flex justify-between items-center bg-[#FCF8F1] bg-opacity-30">
                {/* <a href="#" title="" className="flex  text-3xl font-extrabold uppercase">crafting
                    <span className="flex  text-3xl font-extrabold uppercase text-red-600">brain </span>
                </a> */}
                <Link to="/" className="flex  text-3xl font-extrabold uppercase">crafting
                    <span className="flex  text-3xl font-extrabold uppercase text-red-600">brain </span>
                </Link>

                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-black p-3"
                        onClick={toggleMenu}
                    >
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <ScrollLink to="features" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Features</ScrollLink>
                    <ScrollLink to="mentors" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Our Mentors</ScrollLink>
                    <ScrollLink to="contacts" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Contacts</ScrollLink>
                    <ScrollLink to="courses" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Courses</ScrollLink>

                    {/* <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Our Mentors </a>
                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Contacts </a>
                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Courses </a> */}
                </div>
                <Link to="/signin" class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button">Join Now</Link>

            </nav>
            <div className={`navbar-menu ${isMenuVisible ? 'transition-all duration-300 ease-in' : 'transition-all duration-300 ease-out hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={closeMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a href="#" title="" className="flex  text-3xl font-extrabold uppercase">
                            crafting <span className="flex  text-3xl font-extrabold uppercase text-red-600	 " >brain </span>
                        </a>
                        <button className="navbar-close" onClick={closeMenu}>
                            <svg
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div >
                        <ul>
                            {/* <li class="mb-1">
                                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                            </li> */}
                            <li class="mb-1">
                                <ScrollLink to="features" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Features</ScrollLink>
                            </li>
                            <li class="mb-1">
                                <ScrollLink to="mentors" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Our Mentors</ScrollLink>
                            </li>
                            <li class="mb-1">
                                <ScrollLink to="contacts" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Contacts</ScrollLink>
                            </li>
                            <li class="mb-1">
                                <ScrollLink to="courses" class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Courses</ScrollLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Header;
