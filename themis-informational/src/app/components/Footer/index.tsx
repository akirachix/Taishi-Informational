import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='contact' className="bg-black text-white py-8 px-5 font-josefin">
           <div className="container mx-[20px] flex flex-wrap justify-between items-start md:px-4">
    
             <div className="w-full md:w-1/5 flex flex-col items-start mb-6 md:mb-0 ">
               <div className="rounded-full h-24 w-24 mt-[-20px] flex items-center justify-center">
                 <img src="/Images/Taishi-logo.png" alt="themis Logo" />
               </div>
               {/* <span className="text-white font-bold text-lg">Themis AI</span> */}
             </div>
    
             <div className="w-full md:w-1/5 leading-[40px] mb-6 md:mb-0">
               <h2 className="font-bold text-[20px] mb-7">CONTACT US</h2>
               <p className='text-[15px]'>+254 795 056 850</p>
    
               <p className='text-[15px]'>taishiadalab@gmail.com</p>
               <p className='text-[15px]'>Karen, 616 Korongo Rd</p>
             </div>
    
            
             <div className="w-full md:w-1/5 leading-[37.8px] mb-6 md:mb-0 md:ml-14">
               <h2 className="font-bold text-[20px] mb-7">RESOURCES</h2>
               <ul className="space-y-1">
                 <li><Link href="#" className="text-[15px]">FAQs</Link></li>
                 <li><Link href="#" className="text-[15px]">Quick Start</Link></li>
                 <li><Link href="#" className="text-[15px]">User Guide</Link></li>
               </ul>
             </div>
    
             <div className="w-full md:w-1/5 leading-[38px]  md:mb-0">
               <h2 className="font-bold text-[20px] mb-6 ">LEGAL</h2>
               <ul className="space-y-1">
                 <li><Link href="#" className="text-[15px]">Privacy Policy</Link></li>
                 <li><Link href="#" className="text-[15px]">Terms of Service</Link></li>
               </ul>
               <div className="flex space-x-4 mt-4">
                 <Link href="#"><FaInstagram className="text-[#d38816] text-2xl" /></Link>
                 <Link href="#"><FaTwitter className="text-[#d38816] text-2xl" /></Link>
                <Link href="#"><FaLinkedin className="text-[#d38816] text-2xl" /></Link>
               </div>
            </div>
           </div>

      <div className="container mx-auto w-[98%] mt-6 border-t border-[#d38816]"></div>

      <div className="text-center text-sm mt-2 py-[7.6px]">
        &copy; 2024 | Themis AI is a trademark of Taishi | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
