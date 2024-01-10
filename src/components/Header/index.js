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

    return (
        <div className="relative font-sans">
            <nav className="relative px-4 sm:px-2 md:px-2 lg:px-8 xl:px-24 2xl:px-64 py-3 sm:py-2 md:py-4 lg:py-4 xl:py-6 2xl:py-6 flex justify-between items-center bg-[#FCF8F1] bg-opacity-30">

                <Link to="/" className="flex text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold uppercase">
                    crafting
                    <span className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold uppercase text-red-600">brain</span>
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

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <ScrollLink to="features" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Features</ScrollLink>
                    <ScrollLink to="mentors" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Our Mentors</ScrollLink>
                    <ScrollLink to="contacts" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Contacts</ScrollLink>
                    <ScrollLink to="courses" smooth={true} duration={1200} style={{ cursor: 'pointer' }}>Courses</ScrollLink>
                    <Link to="/signin" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button">Join Now</Link>
                </div>

                {/* Mobile Menu */}
                <div className={`navbar-menu ${isMenuVisible ? 'transition-all duration-300 ease-in' : 'transition-all duration-300 ease-out hidden'}`}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={closeMenu}></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <Link to="/" className="flex text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold uppercase">
                                crafting <span className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold uppercase text-red-600	">brain </span>
                            </Link>
                            <button className="navbar-close ml-2" onClick={closeMenu}>
                                <svg
                                    className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-600 stroke-2"
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
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <ScrollLink to="features" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Features</ScrollLink>
                                </li>
                                <li className="mb-1">
                                    <ScrollLink to="mentors" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Our Mentors</ScrollLink>
                                </li>
                                <li className="mb-1">
                                    <ScrollLink to="contacts" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Contacts</ScrollLink>
                                </li>
                                <li className="mb-1">
                                    <ScrollLink to="courses" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth={true} duration={1200} style={{ cursor: 'pointer' }} onClick={closeMenu}>Courses</ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    );
};

export default Header;
