import React from 'react'
import '../homeComponents/footer.css'
import insta from './images/icons8-instagram-64.png'
import faceb from './images/icons8-facebook-50.png'
import twitter from './images/icons8-twitterx-50.png'
import yt from './images/icons8-youtube-50.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-cont'>
        <div className='desc'>
            <h3>SHOP</h3>
            <span>Face</span>
            <span>Lip</span>
            <span>Eye</span>
            <span>Online only</span>
        </div>
        
        <div className='desc'>
            <h3>COMPANY</h3>
            <span>About Us</span>
            <span>Rare Impact</span>
            <span>Sustainability</span>
            <span>Store Locator</span>
        </div>

        <div className='desc'>
            <h3>CUSTOMER SERVICE</h3>
            <span>Contact Us</span>
            <span>Shade Match Live Chat</span>
            <span>Start a U.S. Return</span>
            <span>Klarna</span>
            <span>Accessibility</span>
        </div>

        <div className='desc'>
            <h3>FOLLOW ON:</h3>
            <img src={insta} alt="" />
            <img src={faceb} alt="" />
            <img src={twitter} alt="" />
            <img src={yt} alt="" />
        </div>

      </div>
      <div className='since'>
        <h1>Beauty Creation</h1>
        <span>© 2023 Beauty Creation  all rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
