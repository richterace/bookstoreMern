import React from 'react'
import { Link } from 'react-router-dom'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi2";


import { getImageUrl } from '../utils/getImg';


const Navbar = () => {

    // imports of images
    const profileImg = getImageUrl('avatar.png');

    const currentUser = true;

    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className='flex justify-between items-center'>
                {/* {left side} */}
                <div className='flex items-center md:gap-16 gap-4'>
                    <Link to="/">
                        <HiBars3CenterLeft className='size-6' />
                    </Link>

                    {/* {Search Input} */}
                    <div className='relative sm:w-72 w-40 space-x-2'>
                        <IoIosSearch className='absolute inline-block left-3 inset-y-2' />
                        <input type="text" placeholder='Search here'
                            className='bg-[#EAEAEA] w-full py-1 
                            md:px-8 px-6 rounded-md focus:outline-none' />
                    </div>
                </div>

                {/* {right side} */}
                <div className='relative flex items-center md:space-x-3 space-x-2'>

                    <div>
                        {
                            currentUser ? <>
                                <button>
                                    <img src={profileImg} alt=""
                                        className={`size-7 rounded-full 
                                        ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                                </button>
                            </> : <Link to="/login"><HiOutlineUser className='size-6' /></Link>
                        }
                    </div>

                    <button className='hidden sm:block'>
                        <HiOutlineHeart className='size-6' />
                    </button>

                    <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                        <HiOutlineShoppingCart className='' />
                        <span className='text-sm font-semibold sm:ml-1'>0</span>
                    </Link>

                </div>

            </nav>

        </header>
    )
}

export default Navbar