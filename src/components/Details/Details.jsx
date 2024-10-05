import React from 'react'
import './details.css'

const Details = ({ detailsItem, setShowDetails }) => {

  const {image, destTitle, location, fees, fullDescription} = detailsItem

  return (
    <div className='details-popup'>
      <div className="details-popup-container">
        <button className="btn flex" onClick={() => setShowDetails(false) }>x</button>
        <div className="details-popup-sec1">
          <div className="details-popup-img">
            <img src={image} alt='' width={'auto'} height={'unset'} />
          </div>
          <div className="details-popup-location">
            <h3>{destTitle}</h3>
            <p><i className="fa-solid fa-location"></i> {location}</p>
          </div>
        </div>

        <div className="details-popup-sec2">
          <span className="details-sec2-title">description</span>
          <p>{fullDescription}</p>
        </div>

        <div className="details-popup-sec3">
          <span className="details-sec2-title">cost</span>
          <div className="details-sec3-flying flex">
            <p>Flying Ticket</p>
            <p>${(fees/3).toFixed()}</p>
          </div>

          <div className="details-sec3-hotel flex">
            <p>Hotel</p>
            <p>${(fees/4).toFixed()}</p>
          </div>

          <div className="details-sec3-total flex">
            <p>TOTAL</p>
            <p>${fees}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
