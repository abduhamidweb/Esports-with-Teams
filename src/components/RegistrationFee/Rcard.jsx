import React from 'react'

const Rcard = ({ data: { id, title, ganer, grate, price, discount,img } }) => {
  return (
    <>
      <div className='col-lg-2 col-md-6 col-sm-6 mx-auto mt-3 btn'>
        <div className='card'>
                  <img src={img } alt='' className='img-fluid card-img' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <span className='card-ganer'>{ganer}</span>
            <div className='card-info'>
              <div className='card-star'>
                <i className='bi bi-star-fill star'></i>
                <span className='card-grad'>{grate}</span>
              </div>
              <div className='card-price'>
                <span className='price'>₹{price}</span>
                <span className='discount ms-2'>₹{discount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rcard
