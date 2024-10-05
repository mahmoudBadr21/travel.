import React, { useEffect ,useRef, useState } from 'react'
import './header.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import video from '../../assets/video.mp4'

const Header = ({setSearch}) => {

  const refLocation = useRef();

  const getLocationValue = () => {
    if (refLocation.current.value != "") {
      setSearch(refLocation.current.value)
    } else {
      setSearch("")
    }
  }

  const handleChangeLocationValue = () => {
    if (refLocation.current.value === "") {
      setSearch("")
    }
  }

  const [inputRef, setInputRef] = useState();
  const refCost = useRef();

  const getCostValue = () => {
    setInputRef(refCost.current.value)
  }

  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="header">

      <div className="overlay"></div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="header-container container flex ">
        <div className="header-text">
          <p data-aos="fade-up">OUR PACKAGES</p>
          <h1 data-aos="fade-up">
            Search your <span data-aos="fade-up">Holiday</span>
          </h1>
        </div>

        <div className="header-fileds-button" data-aos="fade-up">
          <div className="header-fileds grid">
            <div className="header-filed-item">
              <label htmlFor="description">Search your description</label>
              <div className="input-icon">
                <input
                  type="text"
                  id="description"
                  placeholder="Enter name here.."
                  ref={refLocation}
                  onChange={handleChangeLocationValue}
                />
                <i class="fas fa-map-marked-alt fa-fw in-icon"></i>
              </div>
            </div>

            <div className="header-filed-item">
              <label htmlFor="date">Search your Date</label>
              <input type="date" id="date" />
            </div>

            <div className="header-filed-item">
              <label htmlFor="price" className="flex">
                <span>Max price</span>
                <span>${inputRef}</span>
              </label>
              <input
                type="range"
                id="price"
                ref={refCost}
                onChange={getCostValue}
                min={1000}
                max={5000}
              />
            </div>
          </div>

          <button
            className="header-button btn flex"
            onClick={getLocationValue}
          >
            <i className="fa-solid fa-filter"></i>
            <span>MORE FILTERS</span>
          </button>
        </div>

        <div className="header-icons flex" data-aos="fade-up">
          <div className="header-icons-left flex">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-discord"></i>
          </div>

          <div className="header-icons-right flex">
            <i class="fa-regular fa-gem"></i>
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
