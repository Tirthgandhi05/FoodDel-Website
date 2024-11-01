import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod est enim eligendi cumque non quia odio tenetur magnam qui, sunt temporibus minus porro? Ducimus exercitationem eos voluptatibus provident corrupti!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>912-121-454</li>
                    <li>contact@tomato.com</li>
                </ul>


            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 Tomato.com - All Rights Reserved. </p>    
    </div>
  )
}

export default Footer
