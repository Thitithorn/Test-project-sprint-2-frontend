import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navbar: React.FC = () => {
    return (
        <div className='bg-black fixed w-full z-50'>
            <div className="flex justify-between items-center bg-white text-black px-6 py-2 shadow-lg">
                <div className='flex flex-row items-center'>
                    <Link to="/" className="text-2xl font-bold">Milky-Tea-Rex</Link>
                    <div>
                        <ul className="flex gap-6 text-lg px-4 py-1">
                            <li>
                                <Link
                                    to="/sample-box"
                                    className="hover:text-gray-400 cursor-pointer"
                                >
                                    SampleBox
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="hover:text-gray-400 cursor-pointer"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="hover:text-gray-400 cursor-pointer"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <ul className="flex gap-6 text-lg items-center">
                        <li>
                            <Link
                                to="/login"
                                className="hover:text-gray-400 cursor-pointer py-4"
                            >
                                <img
                                    src="https://icon-library.com/images/login-icon-images/login-icon-images-0.jpg"
                                    alt="Login"
                                    className='w-8 h-8'
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className="hover:text-gray-400 cursor-pointer flex flex-row py-4"
                            >
                                {/* <i class="fa fa-shopping-cart"></i> */}
                                <Cart/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
