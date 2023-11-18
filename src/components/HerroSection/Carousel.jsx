import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Carousel.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slid1 from '../images/slider-1.jpg'
import slid2 from '../images/slide2.jpg'
import slid3 from '../images/slide3.jpg'
import slid4 from '../images/slider-4.jpg'

const Carousel = () => {
  
    
  return (
   
   <div className='py-20 md:py-0   '>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full h-[50vh] md:h-screen'  src={slid1}  alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[50vh] md:h-screen'  src={slid2}  alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[50vh] md:h-screen'  src={slid3}  alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[50vh] md:h-screen'  src={slid4}  alt="" />
        </SwiperSlide>
        
     
       
        
      </Swiper>
   </div>
  )
}

export default Carousel
