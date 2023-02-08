import React from 'react'
import './upcom.scss'
import img from '../../images/Up.png'
import gameW from '../../images/gameW.png'
import w1 from '../../images/w1.png'
import w2 from '../../images/w2.png'
import w3 from '../../images/w3.png'
import w4 from '../../images/w4.png'
import w5 from '../../images/w5.png'
import w6 from '../../images/w6.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
const Upcomming = () => {
  return (
    <>
      <section className='upcom'>
        <img src={img} alt='img' className='upcomImg' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 mx-auto'>
              <div className='upcom__left__wrap'>
                <div className='left__text'>
                  <h3 className='title'>Upcomming Game </h3>
                  <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
                <div className='game__wrap'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='game__wrap__img'>
                        <img src={gameW} alt='game war' />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <div className='game__wrap__text'>
                        <div className='game__title'>
                          <div className='game__title__rounded'>
                            <span className='rounded'></span>
                          </div>
                          <div className='game__title__name'>
                            <h5>WarZone Mobile</h5>
                            <span>MULYIPLAYER</span>
                          </div>
                        </div>
                        <div className='game__name'>
                          <h5 className='game__name__title'>5Action</h5>
                          <p className='game__name__description'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <button className='btn btn-feauter'>Features</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 img__wrap mx-auto'>
              <div className='row uWrap'>
                <div className='col-lg-4 col-md-6 col-sm-6 p-3 uW'>
                  <img src={w1} alt='img' className='img-fluid' />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 p-3 uW '>
                  <img src={w2} alt='img' className='img-fluid' />
                </div>{' '}
                <div className='col-lg-4 col-md-6 col-sm-6 p-3 uW'>
                  <img src={w3} alt='img' className='img-fluid' />
                </div>{' '}
                <div className='col-lg-4 col-md-6 col-sm-6 p-3 uW'>
                  <img src={w4} alt='img' className='img-fluid' />
                </div>{' '}
                <div className='col-lg-4 col-md-6 col-sm-6 p-3 uW'>
                  <img src={w5} alt='img' className='img-fluid' />
                </div>{' '}
                <div className='col-lg-4 col-md-6 col-sm-6 p-3 uW'>
                  <img src={w6} alt='img' className='img-fluid' />
                </div>
              </div>
              <div className='md-wrap mt-5'>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={250}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className='mySwiper'
                >
                  <SwiperSlide>
                    <img src={w1} alt='img' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={w2} alt='img' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={w3} alt='img' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={w4} alt='img' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={w5} alt='img' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={w6} alt='img' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Upcomming
