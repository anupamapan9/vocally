import React from 'react';
import Logo from '../../images/logo.svg'
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import DownloadBTN from '../Sheared/DownloadBTN';
const Nav = () => {
    return (
        <nav className='h-[17vh] flex justify-between items-center px-8 md:px-16' >
            <div className='w-1/2'><img src={Logo} alt="" /></div>
            <div className='w-1/2 hidden md:flex justify-around items-center'>
                <span className='flex items-center text-sm'> <FaPhoneAlt /> < span className='pl-2' span>+769 586 4558</span> </span>
                <span className='flex items-center text-sm'> <IoIosMail /> <span className='pl-2'>services@openauto.ca</span> </span>
                <DownloadBTN />
            </div>
        </nav>
    );
};

export default Nav;