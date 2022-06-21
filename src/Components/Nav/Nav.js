import React from 'react';
import Logo from '../../images/logo.svg'
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
const Nav = () => {
    return (
        <nav className='h-[17vh] flex justify-between items-center'>
            <div className='w-1/2'><img src={Logo} alt="" /></div>
            <div className='w-1/2 hidden md:flex justify-around items-center'>
                <span className='flex items-center'> <FaPhoneAlt /> < span className='pl-2' span>+769 586 4558</span> </span>
                <span className='flex items-center'> <IoIosMail /> <span className='pl-2'>services@openauto.ca</span> </span>
                <button className='border-2 border-accent rounded-3xl px-5 text-lg py-2 bg-transparent text-accent hover:border-secondary duration-500'>Download The Mobile App</button>
            </div>
        </nav>
    );
};

export default Nav;