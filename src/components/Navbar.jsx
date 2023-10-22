import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import gmail from "../assets/gmail.svg";



export default function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-10">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <button
                        className="block md:hidden text-gray-900"
                        onClick={handleClick}
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            {showMobileMenu ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    <ul
                        className={`${
                            showMobileMenu ? "block" : "hidden"
                        } md:flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
                    >
                        <li>
                            <Link to="home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-500" aria-current="page" smooth={true} duration={500}>
                                <ImHome size={20} />
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                        <ul>
                            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0884c7]">
                                <a className="flex justify-between items-center w-full text-gray-300 "
                                    href="https://linkedin.com/in/ohad-barzilay-6817751ba"
                                    target="popup">
                                    Linkedin
                                    <AiFillLinkedin size={30} />
                                </a>
                            </li>
                            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
                                <a  className="flex justify-between items-center w-full text-gray-300"
                                    href="https://github.com/Ohadbarz"
                                    target="popup">
                                    GitHub
                                    <AiFillGithub size={30} />
                                </a>
                            </li>
                            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-100 ">
                                <a className="flex justify-between items-center w-full text-gray-800"
                                    href="mailto:ohadbr17@gmail.com">
                                    Email
                                    <img src={gmail}
                                         className="h-auto max-w-xl rounded-lg cursor-pointer filter ml-auto"
                                         alt="gmail"
                                    />
                                </a>
                            </li>
                            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                                <a  className="flex justify-between items-center w-full text-gray-300"
                                    href="https://drive.google.com/uc?export=download&id=1biO9EkE_OB3zV0C5GCvonInwj_h363Ck">
                                    My CV
                                    <BsPersonLinesFill size={30} />
                                </a>
                            </li>
                            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
                                <a className="flex justify-between items-center w-full text-gray-300 "
                                   href="https://wa.me/+972546412695"
                                   target="popup">
                                    Whatsapp
                                    <AiOutlineWhatsApp size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}



