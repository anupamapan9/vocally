import React from 'react';
import Logo from '../../images/logo.svg'
const Nav = () => {
    return (
        <nav className='h-[20vh] flex justify-between items-center'>
            <div className='w-1/2'><img src={Logo} alt="" /></div>
            <div className='w-1/2 flex justify-around items-center'>
                <span> +769 586 4558</span>
                <span> services@openauto.ca</span>
                <button className='border-2 border-accent rounded-3xl px-5 text-lg py-2 bg-transparent text-accent hover:border-secondary duration-500'>Download The Mobile App</button>
            </div>
        </nav>
    );
};

export default Nav;