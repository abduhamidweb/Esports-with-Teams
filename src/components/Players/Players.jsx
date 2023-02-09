import React from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import i1 from '../../images/s1.png'
import i2 from '../../images/2.png'
import i3 from '../../images/3.png'
import i4 from '../../images/4.png'
import i5 from '../../images/5.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
const Players = () => {
  return (
    <>
      <section className='players'>
        <div className='container'>
          <h2 className='players__title'>Players Reviews</h2>
          <p className='player__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className='row'>
            <div className='col-3 mx-auto d-flex px-5 user__wrap '>
              <div className='user__img'>
                <img src={i1} alt='' />
              </div>
              <div className='user__img'>
                <img src={i2} alt='' />
              </div>
              <div className='user__img'>
                <img src={i3} alt='' />
              </div>
              <div className='user__img'>
                <img src={i4} alt='' />
              </div>
              <div className='user__img'>
                <img src={i5} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='players'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='card '>
              <div className='card-description'>
                This 4AG esports is really good . Quick and fast respon. 4AG
                Team Manegment that’s Good !
              </div>
          
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Players
