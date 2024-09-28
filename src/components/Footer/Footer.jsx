import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer-section'>

            <div className='footer-logo-section'>
                <a href='#features'>
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0.144 18.506 19.712" xmlns="http://www.w3.org/2000/svg" viewBox="0 0.144 18.506 19.712" height="30" width="30" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                        <g>
                            <path d="M18.506 4.971H0V.144h15.288a3.22 3.22 0 0 1 3.218 3.218z"></path>
                            <path d="M18.506 12.615H6.035V7.787h9.253a3.22 3.22 0 0 1 3.218 3.219z"></path>
                            <path d="M18.506 19.856h-6.437V15.03h3.218a3.22 3.22 0 0 1 3.219 3.218z"></path>
                        </g>
                    </svg>




                    <label>
                        WorkFlow</label></a></div>

            <div className='footer-container'>
                <div>
                    <label>Contact</label>
                    <ul>
                        <li>info@mysite.com</li>
                        <li>123-456-7890</li>
                        <li>500 Terry Francine Street,</li>
                        <li>San Francisco, CA 94158</li>
                    </ul>
                </div>



                <div>
                    <label>Menu</label>
                    <ul>
                        <a href='#features'><li>Features & Benefits</li></a>
                        <a href='#plans'><li>Our Plans</li></a>

                    </ul>
                </div>





                <div>
                    <label>Helpful links</label>
                    <ul>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Accessibility Statement</li>

                    </ul>
                </div>


                <div className="email-section">
                    <label>Stay Connected</label>
                    <span>Email *</span>
                    <input placeholder='Enter your email'></input>

                    <div className='subscribe-section'>
                        <p>Subscribe me to your <br></br> newsletter.</p>
                        <button>Subscribe</button>
                    </div>


                </div>
            </div>




            <div className='social-media-links'>
                <ul>
                    <a href='#'> <li>Facebook</li></a>
                    <a href='#'> <li>Instagram</li></a>
                    <a href='#'> <li>X</li></a>
                    <a href='#'><li>TikTok</li></a>
                </ul>


                <span>© 2035 by Workflow. Built on Wix Studio</span>

            </div>
        </div>
    )
}

export default Footer