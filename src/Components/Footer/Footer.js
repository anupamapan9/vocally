import React from 'react';
import Logo from '../../images/logo.svg'
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className='bg-[#151a23]'>
            <div className='w-[90%] m-auto h-[1px] bg-slate-600'></div>
            <div className='flex justify-between items-center flex-col md:flex-row gap-5 px-8 md:px-16 py-5 pt-10' >
                <div ><img src={Logo} alt="" /></div>
                <div className='flex justify-around items-center gap-10'>
                    <span className='flex items-center text-sm'> <FaPhoneAlt /> < span className='pl-2' span>+769 586 4558</span> </span>
                    <span className='flex items-center text-sm'> <IoIosMail /> <span className='pl-2'>services@openauto.ca</span> </span>
                </div>
            </div>
            <div className='flex justify-between items-center flex-col  md:flex-row gap-5 px-5 md:px-16 py-5' >
                <div ><p>Open Auto &copy; all rights reserved</p></div>
                <div className='flex md:justify-end justify-around w-full md:w-auto text-sm md:hidden'>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'>privacy policy</span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'>terms of use</span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer '>cookie policy</span>
                </div>
                <div className='flex md:justify-end justify-around w-full md:w-auto text-xl'>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer '><GrFacebookOption /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiOutlineTwitter /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiFillYoutube /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'>< AiFillLinkedin /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiOutlineInstagram /></span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;