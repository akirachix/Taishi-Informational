
'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { Josefin_Sans } from "next/font/google";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
const josefinSans = Josefin_Sans({ subsets: ['latin'] });
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="text-white bg-transparent mx-18 fixed top-0 left-0 w-full z-50 mx-[-30px]">
            <div className="max-w-8xl mx-auto flex justify-between items-center py-6 px-4 ">
                <div className={`${josefinSans.className} text-2xl font-bold`}>
                    <Link href="#home">
                        <Image src="/Images/Taishi-logo.png" alt="Taishi-logo" width={100} height={100}
                        className="w-10 h-10  md:w-20 md:h-20 lg:w-20 lg:h-20 mx-[40px] sp:mx-[20px"/>
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
                <ul className="hidden lg:flex space-x-12">
                    {['home', 'features', 'about', 'team', 'contact'].map((link, index) => (
                        <li key={index} className={`${josefinSans.className} font-bold text-2xl`}>
                            <Link
                                href={`#${link}`}
                                onClick={() => setActiveLink(link)}
                                className={activeLink === link ? 'text-[#D38816]' : ''}
                                //className={`#${hashPath}` === `#${link}` ? 'text-[#D38816]' : ''}
                                 >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
                {isOpen && (
                    <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-40 ">
                        <ul className="flex flex-col items-center justify-center h-full space-y-6 ">
                            {['home', 'features', 'about', 'team', 'contact'].map((link, index) => (
                                <li key={index} className={`${josefinSans.className} font-bold text-xl`}>
                                    <Link
                                        href={`#${link}`}
                                        onClick={() => { setActiveLink(link); toggleMenu(); }}
                                        className={activeLink === link ? 'text-[#D38816]' : ''}
                                        //className={`#${hashPath}` === `#${link}` ? 'text-[#D38816]' : ''}
                                    >
                                        {link.charAt(0).toUpperCase() + link.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className="absolute top-4 right-4 z-50" onClick={toggleMenu}>
                            <FaTimes size={30} />
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;