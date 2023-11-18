import React from 'react'
import doc from '../images/doc.png'
import phone from '../images/phone.png'
import phone2 from '../images/phone2.png'
import './About.css';
const About = () => {
    return (
        <>
            <div className='w-full h-auto bg-black p-5 static z-30'>
                <h1 className='text-center text-5xl text-white  py-10 pt-20'><span className='text-[#ee801e]'>ABOUT</span> HOSPITAL</h1>
                <div className='flex items-center  md:justify-center flex-col md:flex-row  py-4  md:relative'>
                    <div className='md:w-[70vw] md:h-[70vh] m-1 md:m-0 framed md:z-10 zoom'>
                        <img className='w-full h-full' src={doc} alt="" />
                    </div>
                    <div className=' w-full md:w-[31.5vw] md:absolute md:right-16 md:top-20 h-auto md:h-[83.9vh] bg-white py-5 px-2 m-4 md:m-0 md:z-40'>
                        <div className='px-5'>
                            <h3 className='text-[35px] text-[#ee801e] leading-10'><span className='text-black'>Welcome</span> to Senthil Multi Speciality Hospital.</h3>
                            <p className='text-[19px] font-bold py-6'>Dear Friends & Colleagues,</p>
                            <p className='py-5'>My happy greetings to all !</p>
                            <div className='w-full'>
                                <p className='text-sm font-bold tracking-wide leading-6'>With profound privilege, I take this opportunity to introduce our facilities, Departments & Consultants for your kind referral.</p>
                                <div className='text-right py-10 font-semibold px-5'>
                                    <p >Sincerely,</p>
                                    <p>Dr.C.Senthilvel,M.D.,D.M., (Neuro)</p>
                                    <div className='py-4 '><p>Read More</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className='text-zinc-600 opacity-25 font-bold text-[5rem] pt-32 px-8 hidden md:block'>ABOUT</h5>
            </div>



            <div className='contact-box'>
                <div className='flex items-center justify-between flex-wrap md:px-10'>
                    <div className='text-white py-2'>
                        <p className='px-6 text-xl font-bold'>For an Emergency Please to Contact</p>
                        <div className='flex items-center justify-start  '>
                            <img src={phone} alt="" />
                            <p className='text-xl md:text-5xl'>88830 55555</p>
                        </div>
                    </div>
                        <div className='flex items-center gap-20 px-6'>
                            <img className='hidden md:block' src={phone2} alt="" />
                            <button className='bg-slate-700  bt mb-6 md:mb-0'>CONTACT US</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default About
