import React from 'react';
import HeroImg from '../../images/Pickup_Illustration.png'
import Arrow from '../../images/arro.svg'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Header = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data) {
            const name = data.name
            const email = data.email
            const user = {
                name,
                email
            }
            fetch('http://localhost:5000/users', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then(response => response.json())
                .then(result => {
                    if (result?.acknowledged) {
                        toast.success("Data Recorded!! Thanks")
                    }
                    else {
                        toast.error('Ops!! Some error happens')
                    }
                })
        }
        reset()
    };
    return (
        <header className='flex flex-col lg:flex-row gap-6 min-h-[83vh] justify-between items-center bg-[url("https://i.ibb.co/RpfC2LN/486-4862161-world-dot-map-png-png-download-world-map-removebg-preview.png")] lg:bg-cover bg-contain bg-no-repeat bg-opacity-5 relative px-8 lg:px-16'>
            <ToastContainer />
            <div className='lg:w-2/5'>
                <div className='text-center lg:text-left'>
                    <h2 className='text-3xl lg:text-5xl font-semibold leading-[1.2]' >Vehicle Maintenance <br /> From The Comfort of <br /> Your Home</h2>
                    <p className='text-accent px-3 py-2'>
                        Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free
                    </p>
                </div>
                <form className='lg:w-3/5' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder='Enter Your Name' className='w-full bg-transparent px-3 py-2 border-accent border-2 my-2 outline-none rounded-3xl' type="text" />
                    {errors.name?.type === 'required' && <span className='text-error pl-5'>Name is required</span>}
                    <br />
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        })}
                        placeholder='Enter Your Email' className='w-full bg-transparent px-3 py-2 border-accent border-2 my-2 outline-none rounded-3xl' type="text" />

                    {errors.email?.type === 'required' && <span className='text-error pl-5'>Email is required</span>}
                    {errors.email?.type === 'pattern' && <span className='text-error pl-5'>Please enter a valid email</span>}
                    <br />
                    <input className='w-full bg-transparent px-3 py-2 border-accent border-2 my-2 outline-none rounded-3xl hover:border-secondary hover:bg-secondary duration-500 cursor-pointer' type="submit" value="Submit" /> <br />
                </form>

            </div>
            <div className='lg:w-3/5'>
                <img src={HeroImg} alt="" />
                <div className='flex lg:justify-end justify-center py-5 text-xl '>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer '><GrFacebookOption /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiOutlineTwitter /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiFillYoutube /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'>< AiFillLinkedin /></span>
                    <span className='pl-5 hover:text-secondary duration-500 cursor-pointer'><AiOutlineInstagram /></span>
                </div>
            </div>
            <div className="absolute bottom-5 hidden lg:block right-[50%] hover:-rotate-180 duration-500">
                <a href="#time"> <img src={Arrow} alt="" /></a>
            </div>
        </header>
    );
};

export default Header;