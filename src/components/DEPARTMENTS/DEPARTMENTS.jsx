import React from 'react'
import './Depart.css';
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
const DEPARTMENTS = () => {
    return (
        <div className='flex items-start justify-center flex-col w-full '>
            <div className=' our-text'>
                <div className='flex items-center justify-between w-full px-10 md:px-14 flex-wrap  pt-20 py-10'>
                    <div><h2 className='text-4xl font-medium'><span className='text-orange-500 text'>OUR</span> DEPARTMENTS</h2> </div>
                    <div><button className='btn'>View All</button></div>
                </div>
                <div className='  md:px-14  w-full md:w-[65%] '>
                    <p className=' w-full text-lg px-10 md:px-0'>Combining the best specialists and equipment to provide you nothing short of the best in healthcare</p>
                </div>
            </div>



            <div className='flex items-center  justify-center gap-8 mx-auto py-16 flex-wrap'>
                <div className='flex  flex-col w-[16rem] h-80 card-box rounded-md '>
                    <div className='flex items-center justify-between h-[40%] bg-[#fff] rounded-tl-md rounded-se-md w-full px-4 '>
                        <img className='w-16' src={c1} alt="" />
                        <span className='text-[7.5rem] opacity-20 transition-all duration-200 hover:text-[#ee801e] hover:opacity-100 font-bold'>1</span>
                    </div>
                    <div className='px-8  card-text h-full'>
                        <p className=''>Neurology</p>
                        <p className='font-medium leading-7'>Our Hospital have two full time Neurologists. The hospital offers all...</p>
                        <div className='py-6'>
                            <button>Read More </button>
                        </div>
                    </div>
                </div>
                <div className='flex  flex-col w-[16rem] h-80 card-box rounded-md '>
                    <div className='flex items-center justify-between h-[40%] bg-[#fff] rounded-tl-md rounded-se-md w-full px-4 '>
                        <img className='w-16' src={c2} alt="" />
                        <span className='text-[7.5rem]  opacity-20 transition-all duration-200 hover:text-[#ee801e] hover:opacity-100 font-bold'>2</span>
                    </div>
                    <div className='px-8  card-text h-full'>
                        <p className=''>Neurology</p>
                        <p className='font-medium leading-7'>Our Hospital have two full time Neurologists. The hospital offers all...</p>
                        <div className='py-6'>
                            <button>Read More </button>
                        </div>
                    </div>
                </div>
                <div className='flex  flex-col w-[16rem] h-80 card-box rounded-md '>
                    <div className='flex items-center justify-between h-[40%] bg-[#fff] rounded-tl-md rounded-se-md w-full px-4 '>
                        <img className='w-16' src={c3} alt="" />
                        <span className='text-[7.5rem] opacity-20 transition-all duration-200 hover:text-[#ee801e] hover:opacity-100 font-bold'>3</span>
                    </div>
                    <div className='px-8  card-text h-full'>
                        <p className=''>Neurology</p>
                        <p className='font-medium leading-7'>Our Hospital have two full time Neurologists. The hospital offers all...</p>
                        <div className='py-6'>
                            <button>Read More </button>
                        </div>
                    </div>
                </div>
                <div className='flex  flex-col w-[16rem] h-80 card-box rounded-md '>
                    <div className='flex items-center justify-between h-[40%] bg-[#fff] rounded-tl-md rounded-se-md w-full px-4 '>
                        <img className='w-16' src={c4} alt="" />
                        <span className='text-[7.5rem] opacity-20 transition-all duration-200 hover:text-[#ee801e] hover:opacity-100 font-bold'>4</span>
                    </div>
                    <div className='px-8  card-text h-full'>
                        <p className=''>Neurology</p>
                        <p className='font-medium leading-7'>Our Hospital have two full time Neurologists. The hospital offers all...</p>
                        <div className='py-6'>
                            <button>Read More </button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default DEPARTMENTS
