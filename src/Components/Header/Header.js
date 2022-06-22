import React from 'react';
import HeroImg from '../../images/Pickup_Illustration.png'
import Arrow from '../../images/arro.svg'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
const Header = () => {

    return (
        <header className='flex flex-col md:flex-row gap-6 min-h-[83vh] justify-between items-center bg-[url("https://i.ibb.co/RpfC2LN/486-4862161-world-dot-map-png-png-download-world-map-removebg-preview.png")] bg-cover bg-no-repeat bg-opacity-5 relative px-8 md:px-16'>
            <div className='md:w-2/5'>
                <div className='text-center md:text-left'>
                    <h2 className='text-3xl md:text-5xl font-semibold leading-[1.2]' >Vehicle Maintenance <br /> From The Comfort of <br /> Your Home</h2>
                    <p className='text-accent px-3 py-2'>
                        Open Auto Soothes the hassle of maintaining your vehicle and helps <br /> you deal with unexpected repairs worry-free
                    </p>
                </div>
                <form className='md:w-3/5'>
                    <input placeholder='Enter Your Name' className='w-full bg-transparent px-3 py-2 border-accent border-2 my-2 outline-none rounded-3xl' type="text" /> <br />
                    <input placeholder='Enter Your Email' className='w-full bg-transparent px-3 py-2 border-accent border-2 my-2 outline-none rounded-3xl' type="email" /> <br />
                    <input className='w-full bg-transparent px-3 py-2 border-accent border-2 my-2 outline-none rounded-3xl hover:border-secondary hover:bg-secondary duration-500 cursor-pointer' type="submit" value="Submit" /> <br />
                </form>

            </div>
            <div className='md:w-3/5'>
                <img src={HeroImg} alt="" />
                <div className='flex justify-end text-xl'>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer '><GrFacebookOption /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiOutlineTwitter /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiFillYoutube /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'>< AiFillLinkedin /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiOutlineInstagram /></span>

                </div>
                <div></div>
            </div>
            <div className="absolute bottom-5 right-[50%] hover:-rotate-180 duration-500">
                <a href="#time"> <img src={Arrow} alt="" /></a>
            </div>
        </header>
    );
};

export default Header;