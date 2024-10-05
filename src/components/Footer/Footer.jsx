import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer container'>
      <div className="footer-travelWith" data-aos="fade-up">
        <div className="footer-travelWith-content">
          <p><small>KEEP IN TOUCH</small></p>
          <div className="footer-travelWith-form flex">
            <h2>Travel with us</h2>
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex">
              <span>SEND</span>
              <i className='fa-brands fa-telegram'></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <div className="footer-info-container flex">
          <div className="footer-info-item1" data-aos="fade-up">
            <h2>
              <a href="#">
                <i className="fa-brands fa-slack"></i> <span>Travel.</span>
              </a>
            </h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              A aspernatur, corporis explicabo, illum doloribus ex quaerat
              voluptatum laborum ad recusandae tempora atque!
              Suscipit ad eligendi laborum, accusantium quam facere repudiandae neque quasi,
              reprehenderit minima iste perspiciatis a cumque dicta nesciunt laboriosam ipsa repellat molestiae?
            </p>

            <div className="footer-item1-social flex">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-discord"></i>
            </div>
          </div>

          <div className="footer-info-item2" data-aos="fade-up" data-aos-duration = "3000">
            <h3>OUR AGENCY</h3>
            <div className="footer-items-links flex">
              <li><i class="fa-solid fa-angle-right"></i> Serivices</li>
              <li><i class="fa-solid fa-angle-right"></i> Insturance</li>
              <li><i class="fa-solid fa-angle-right"></i> Agency</li>
              <li><i class="fa-solid fa-angle-right"></i> Tourism</li>
              <li><i class="fa-solid fa-angle-right"></i> Payment</li>
            </div>
          </div>

          <div className="footer-info-item3" data-aos="fade-up" data-aos-duration = "4000">
            <h3>PARTNERS</h3>
            <div className="footer-items-links flex">
              <li><i class="fa-solid fa-angle-right"></i> Booking</li>
              <li><i class="fa-solid fa-angle-right"></i> Rent a Car</li>
              <li><i class="fa-solid fa-angle-right"></i> Host a World</li>
              <li><i class="fa-solid fa-angle-right"></i> Trivago</li>
              <li><i class="fa-solid fa-angle-right"></i> Trip a dvisor</li>
            </div>
          </div>

          <div className="footer-info-item4" data-aos="fade-up" data-aos-duration = "5000">
            <h3>LAST MINUTE</h3>
            <div className="footer-items-links flex">
              <li><i class="fa-solid fa-angle-right"></i> London</li>
              <li><i class="fa-solid fa-angle-right"></i> Califonia</li>
              <li><i class="fa-solid fa-angle-right"></i> Indonesia</li>
              <li><i class="fa-solid fa-angle-right"></i> Europe</li>
              <li><i class="fa-solid fa-angle-right"></i> Oceania</li>
            </div>
          </div>
        </div>

        <div className="footer-info-copyright flex">
          <div className="footer-info-copyright-left">BEST TRAVEL WEBSITE</div>

          <div className="footer-info-copyright-right">&copy; All Right Reserved - MBadr 2024</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
