import './Footer.css'
import { PiBagSimpleFill } from "react-icons/pi";
import {  FaGift } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdHelpCenter } from "react-icons/md";

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className="footer-upper">
                <div>
                    <h4 className="heading">About</h4>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Carriers</p>
                    <p>Press</p>
                    <p>Cleartrip</p>
                    <p>Corporate Information</p>
                </div>

                <div>
                    <h4 className="heading">Help</h4>
                    <p>Payments</p>
                    <p>Shippings</p>
                    <p>Cancellation and Returns</p>
                    <p>FAQ</p>
                    <p>Report Infringement</p>
                </div>

                <div>
                    <h4 className="heading">Consukmer Policy</h4>
                    <p>Canellation and Returns</p>
                    <p>Terms of Use</p>
                    <p>Security</p>
                    <p>Privacy</p>
                    <p>Sitemap</p>
                    <p>Grievance</p>
                </div>

                <div>
                    <h4 className="heading">Social</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Instagram</p>
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
