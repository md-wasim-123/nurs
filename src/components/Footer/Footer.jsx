import React from 'react'
import footerlogo from '../images/footerlogo.png'
import './Footer.css';
const Footer = () => {
    return (


        <footer className="bg-img">
            <div className="mx-auto w-full max-w-screen-2xl   ">
                <div className='flex items-center justify-around w-[60%] py-1 color-foo mx-auto text-white '>
                    <p className=''>CONTACT US</p>
                    <p>USEFUL LINKS</p>
                </div>
                <div className="md:flex md:justify-between px-10 py-10 ">
                    <div className="md:flex md:justify-between flex-col  mb-6 md:mb-0 px-5 py-3 ">
                        <a href="/" className="flex items-center">
                            <img src={footerlogo} className="w-20 me-3" alt="FlowBite Logo" />
                        </a>
                        <div className='flex items-center justify-center gap-2 py-3'>
                            <div className=' icon'><i className="fa-brands fa-facebook-f"></i></div>
                            <div className=' icon'><i className="fa-brands fa-instagram"></i></div>
                            <div className=' icon'><i className="fa-brands fa-youtube"></i></div>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        <div className=''>
                            <p className=" text-xs font-semibold text-gray-900 uppercase p-1">No. 547, Perundurai Road, Erode - 11</p>
                            <ul className=" text-gray-900 font-semibold">
                                <li className="p-1">
                                    <a href="/" className="hover:underline text-xs">E: smshospital_erode@yahoo.co.in</a>
                                </li>
                                <li className='p-1'>
                                    <a href="https://tailwindcss.com/" className="hover:underline">For Appointments Call</a>
                                </li>
                                <li  className='p-1'>
                                    <a href="https://tailwindcss.com/" className="hover:underline">(0424) - 2260375 / 376 / 377</a>
                                </li>
                                <li  className='p-1'>
                                    <a href="https://tailwindcss.com/" className="hover:underline">24 Hrs Helpline</a>
                                </li>
                                <li  className='p-1'>
                                    <a href="https://tailwindcss.com/" className="hover:underline">+91 888 30 55555</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="p-2 text-sm font-semibold text-gray-900 uppercase ">Home</p>
                            <hr  className='p-2'/>
                            <ul className="text-gray-900 font-medium text-sm">
                                <li className="p-2">
                                    <a href="/" className="hover:underline ">Github</a>
                                    <hr className='p-2'/>
                                </li>
                                <li className='p-2'>
                                    <a href="/" className="hover:underline">CONSULTANTS</a>
                                    <hr />
                                </li>
                                <li className='p-2'>
                                    <a href="/" className="hover:underline">DEPARTMENTS</a>
                                    <hr />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="p-2 text-sm font-semibold text-gray-900 uppercase ">FACILITIES</p>
                            <hr  className='p-2'/>
                            <ul className="text-gray-900 font-medium text-sm">
                                <li className="p-2">
                                    <a href="/" className="hover:underline ">CASHLESS INSURANCE</a>
                                    <hr className='p-2'/>
                                </li>
                                <li className='p-2'>
                                    <a href="/" className="hover:underline">GALLERY</a>
                                    <hr />
                                </li>
                                <li className='p-2'>
                                    <a href="/" className="hover:underline">CONTACT US</a>
                                    <hr />
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>







                <div className="sm:flex sm:items-center sm:justify-between px-10 color-foo w-full py-5 text-white font-semibold">
                    <span className="text-xs  sm:text-center ">
                        © 2020 - 2023 Senthil Multi Speciality Hospital. All Rights Reserved.
                        <a href="/" className="hover:underline">Flowbite™</a>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <span className="text-xs">Powered by Santhila DataBot</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
