import './Footer.css'
import { PiBagSimpleFill } from "react-icons/pi";
import {  FaGift } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdHelpCenter } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className="footer-upper">
                <div>
                    <h4 className="heading">About</h4>
                    <p><Link to={'/home'}>Contact Us</Link></p>
                    <p><Link to={'/home'}>About Us</Link></p>
                    <p><Link to={'/home'}>Carriers</Link></p>
                    <p><Link to={'/home'}>Press</Link></p>
                    <p><Link to={'/home'}>Cleartrip</Link></p>
                    <p><Link to={'/home'}>Corporate Information</Link></p>
                </div>

                <div>
                    <h4 className="heading">Help</h4>
                    <p><Link to={'/home'}>Payments</Link></p>
                    <p><Link to={'/home'}>Shippings</Link></p>
                    <p><Link to={'/home'}>Cancellation and Returns</Link></p>
                    <p><Link to={'/home'}>FAQ</Link></p>
                    <p><Link to={'/home'}>Report Information</Link></p>
                </div>

                <div>
                    <h4 className="heading">Consukmer Policy</h4>
                    <p><Link to={'/home'}>Cancellation and Returns</Link></p>
                    <p><Link to={'/home'}>Terms of Use</Link></p>
                    <p><Link to={'/home'}>Security</Link></p>
                    <p><Link to={'/home'}>Privacy</Link></p>
                    <p><Link to={'/home'}>Sitemap</Link></p>
                    <p><Link to={'/home'}>Grievance</Link></p>
                </div>

                <div>
                    <h4 className="heading">Social</h4>
                    <p><Link to={'/home'}>Facebook</Link></p>
                    <p><Link to={'/home'}>Twitter</Link></p>
                    <p><Link to={'/home'}>Youtube</Link></p>
                    <p><Link to={'/home'}>Instagram</Link></p>
                </div>

            </div>
            <div className="footer-bottom">
                <div>
                    <PiBagSimpleFill />
                    Become a Seller</div>
                <div>
                    <FaGift />
                    Advertise</div>
                <div>
                    <RiAdvertisementFill />
                    Gift Cards</div>
                <div>
                    <MdHelpCenter />
                    Help Center</div>
                <div>@2023.shopinger.com</div>
            </div>
        </div>
    )
}

export default Footer
