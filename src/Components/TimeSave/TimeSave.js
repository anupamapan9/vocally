import React from 'react';
import Mobile from '../../images/Phone.svg'
import DownloadBTN from '../Sheared/DownloadBTN';
const TimeSave = () => {
    return (
        <section className='bg-[#151a23] grid grid-cols-1 md:grid-cols-2 py-16 items-center px-8 md:px-24 scroll-smooth' id='time'>
            <div>
                <img src={Mobile} alt="" className='md:w-4/5' />
            </div>
            <div>
                <div className='text-center md:text-justify'>
                    <h2 className='text-3xl md:text-5xl font-semibold leading-[1.2]' >Focus on <br /> Time Saving</h2>
                    <p className='text-accent px-3 py-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident reprehenderit nihil incidunt et impedit voluptate ipsum expedita repellat velit quasi tempore officiis eaque, nostrum accusamus pariatur in veniam eos excepturi nesciunt animi harum modi. Ullam itaque mollitia nesciunt tempore iusto blanditiis natus dolores et, impedit provident assumenda iure iste?
                    </p>
                    <DownloadBTN />
                </div>
            </div>
        </section>
    );
};

export default TimeSave;