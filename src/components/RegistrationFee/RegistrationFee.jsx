import React from 'react'
import './RegistrationFee.scss'
import r1 from '../../images/r1.png'
const RegistrationFee = () => {
  return (
    <>
      <section className='RegistrationFee'>
        <div className='container'>
          <h2 className='fs-2'>Registration Fee</h2>
        </div>
        <div className='RegistrationFee__contain'>
          <div className='row'>
            <div className='col-lg-2 col-md-4 col-sm-2'>
              <div className='card'>
                <img src={r1} alt='' className='img-fluid card-img' />
                <div className='card-body'>
                  <h5 className='card-title'>Apex Mobile #1</h5>
                  <span className='card-ganer'>MULTIPLAYER</span>
                  <div className='card-info'>
                    <div className='card-star'>
                      <i class='bi bi-star'></i>
                    </div>
                    <div className='card-price'></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-12 col-sm-12">

            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default RegistrationFee
