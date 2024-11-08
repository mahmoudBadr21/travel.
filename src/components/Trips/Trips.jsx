import React, { useEffect } from 'react'
import './trips.css'
import { trips_list } from '../../assets/assets'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Trips = ({ search ,toggleDetiles, setDetailsItem }) => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [])

  const addToDetailsItem = (itemId) => {
    setDetailsItem(trips_list.find((trip) => trip.id == itemId))
  };

  return (
    <div className='trips container section'>
      <h2  data-aos="fade-right">Most visited <span>destinations</span></h2>
      <div className="trips-cards grid">
        {
          trips_list.map((value, index) => {
            if (
              search === "" ||
              search.toLowerCase() === value.location.toLowerCase() ||
              search.toLowerCase() === value.destTitle.toLowerCase()
            ) {
              return (
                <div
                  className="trips-cards-card"
                  key={index}
                  data-aos="fade-up"
                >
                  <div className="trips-cards-sec1">
                    <div className="trips-sec1-img">
                      <img
                        src={value.image}
                        alt=""
                        width={"auto"}
                        height={"unset"}
                      />
                    </div>
                    <div className="trips-sec1-title">
                      <h3>{value.destTitle}</h3>
                      <p>
                        <i className="fa-solid fa-location"></i>{" "}
                        {value.location}
                      </p>
                    </div>
                  </div>

                  <div className="trips-cards-sec2 flex">
                    <div className="trips-sec2-grade">
                      <p>
                        <span>{value.grade}</span>
                        <button className="btn">
                          <i className="fa-solid fa-long-arrow-alt-right"></i>
                        </button>
                      </p>
                    </div>

                    <div className="trips-sec2-price">
                      <b>${value.fees}</b>
                    </div>
                  </div>

                  <div className="trips-cards-sec3">
                    <p>{value.description}</p>
                    <button
                      className="btn flex"
                      onClick={() => {
                        toggleDetiles();
                        addToDetailsItem(value.id);
                      }}
                    >
                      <span>DETAILS</span>
                      <i className="fa-regular fa-clipboard"></i>
                    </button>
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    </div>
  )
}

export default Trips
