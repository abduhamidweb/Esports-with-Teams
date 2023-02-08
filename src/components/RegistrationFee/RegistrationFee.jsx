import React, { Fragment } from 'react'
import './RegistrationFee.scss'
import r1 from '../../images/r1.png'
import r2 from '../../images/r2.png'
import r3 from '../../images/r3.png'
import r4 from '../../images/r4.png'
import r5 from '../../images/r5.png'
import r6 from '../../images/r6.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper'
import Rcard from './Rcard'
const RegistrationFee = () => {
  const data = [
    {
      id: 1,
      title: 'Apex Mobile #1',
      ganer: 'MULTIPLAYER',
      grate: 4.7,
      price: 799,
      discount: 999,
      img: r1,
    },
    {
      id: 2,
      title: 'COD Mobile #2',
      ganer: 'MULTIPLAYER',
      grate: 4.7,
      price: 799,
      discount: 999,
      img: r2,
    },
    {
      id: 3,
      title: 'Apex Mobile #3',
      ganer: 'MULTIPLAYER',
      grate: 4.7,
      price: 799,
      discount: 999,
      img: r3,
    },
    {
      id: 4,
      title: 'Fortnite #4',
      ganer: 'MULTIPLAYER',
      grate: 4.7,
      price: 799,
      discount: 999,
      img: r4,
    },
    {
      id: 5,
      title: 'bgmi #5',
      ganer: 'MULTIPLAYER',
      grate: 4.7,
      price: 739,
      discount: 999,
      img: r5,
    },
    {
      id: 6,
      title: 'AOV  #6',
      ganer: 'MULTIPLAYER',
      grate: 4.7,
      price: 399,
      discount: 999,
      img: r6,
    },
  ]
  return (
    <>
      <section className='RegistrationFee'>
        <div className='container'>
          <h2 className='fs-2 RegistrationFee__title'>Registration Fee</h2>
          <div className='RegistrationFee__contain'>
            <div className='row RegistrationFee__contain__wrap'>
              {data.length > 0
                ? data.map((item) => {
                    return (
                      <Fragment key={item.id}>
                        <Rcard data={item} />
                      </Fragment>
                    )
                  })
                : 'Data is not available Please try again later.'}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegistrationFee

