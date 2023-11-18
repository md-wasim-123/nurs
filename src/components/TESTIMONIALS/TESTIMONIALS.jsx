import React from 'react'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import pic from '../images/pic.jpg'
import pic2 from '../images/pic2.jpg'
import './TESTIMONIALS.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const TESTIMONIALS = () => {
    return (
        <div>
            <div className='text-center py-10'>
                <h4 className='text-5xl'>CLIENT TESTIMONIALS</h4>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
               
                <SwiperSlide className='px-10 py-20 '> 
                    <section class="bg-white px-10 testi-sha py-5  ">
                        <div class="max-w-screen-xl ">
                            <div className='flex items-center justify-between gap-10'>
                                <div className='flex  justify-between gap-5 '>
                                    <img className='rounded-full w-20 border p-1' src={pic} alt="" />
                                    <p className='mt-3'>A Romieo</p>
                                </div>
                                <div>
                                <i class="fa-solid fa-quote-right text-lg md:text-8xl text-orange-200 opacity-50"></i>
                                </div>
                            </div>
                            <div className='py-2'>
                               <p className='text-sm font-semibold leading-6'>
                               Very good speciality and treatment
                               </p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='px-10 py-20 '> 
                    <section class="bg-white px-10 testi-sha py-5  ">
                        <div class="max-w-screen-xl ">
                            <div className='flex items-center justify-between gap-10'>
                                <div className='flex  justify-between gap-5 '>
                                    <img className='rounded-full w-20 border p-1' src={pic} alt="" />
                                    <p className='mt-3'>Badrinath K S</p>
                                </div>
                                <div>
                                <i class="fa-solid fa-quote-right text-lg md:text-8xl text-orange-200 opacity-50"></i>
                                </div>
                            </div>
                            <div className='py-2'>
                               <p className='text-sm font-semibold leading-6'>
                               My mother goes to this hospital every month to consult Dr. Selvaraj for diabetes. He is an excellent doctor to treat diabetes and my mom's sugar level is very much within control for last 10-12 years.
                               </p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='px-10 py-20 '> 
                    <section class="bg-white px-10 testi-sha py-5  ">
                        <div class="max-w-screen-xl ">
                            <div className='flex items-center justify-between gap-10'>
                                <div className='flex  justify-between gap-5 '>
                                    <img className='rounded-full w-20 border p-1' src={pic2} alt="" />
                                    <p className='mt-3'>Ambika k</p>
                                </div>
                                <div>
                                <i class="fa-solid fa-quote-right text-lg md:text-8xl text-orange-200 opacity-50"></i>
                                </div>
                            </div>
                            <div className='py-2'>
                               <p className='text-sm font-semibold leading-6'>
                               I used to take pain killers regularly for my back pain as the pain was unbearable. My friend was worried and asked to consult the ortho. I consulted the doctor, he switched the meds and suggested a few simple exercises and lifestyle changes. I followed the routine and now I’m feeling much better.
                               </p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='px-10 py-20 '> 
                    <section class="bg-white px-10 testi-sha py-5  ">
                        <div class="max-w-screen-xl ">
                            <div className='flex items-center justify-between gap-10'>
                                <div className='flex  justify-between gap-5 '>
                                    <img className='rounded-full w-20 border p-1' src={pic2} alt="" />
                                    <p className='mt-3'>kanimozhi N </p>
                                </div>
                                <div>
                                <i class="fa-solid fa-quote-right text-lg md:text-8xl text-orange-200 opacity-50"></i>
                                </div>
                            </div>
                            <div className='py-2'>
                               <p className='text-sm font-semibold leading-6'>
                               My relative's baby’s heart was not functioning properly. They consulted many hospitals but there was no improvement. I suggested this hospital to them, as they had a team of experienced doctors and I was getting really good treatment for my Kidneys. They found the problem with the baby’s heart and they came up with the best treatment plan. The baby is now healthy, after few months of treatment. Thanks a lot.
                               </p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default TESTIMONIALS
