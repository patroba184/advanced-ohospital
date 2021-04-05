import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Paper from  '@material-ui/core/Paper'
const Footer = () => {
    return (

        <Paper>
        <div className='footer__container'>
           
             <div className='footer__section footer__sectionone'>
                <p>Our aim is to coonect patients and<br/>
                health providers all over Kenya and africa</p>

                    <div className='icon__container'>
                        <FacebookIcon/>
                        <PhotoCameraIcon/>
                        <LinkedInIcon/>
                        <TwitterIcon/>
                    </div>

            </div>
            <div className='footer__section'>
                <h5>products</h5>
                <ul>
                    <li>software</li>
                    <li>Application</li>
                    <li>Doctor planning</li>
                    <li>Enterprise</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className='footer__section'>
                <h5>Resources</h5>
                <ul>
                    <li>Payment option</li>
                    <li>Fee schedule</li>
                    <li>Getting Started</li>
                    <li>Book</li>
                    <li>Consult</li>
                </ul>
            </div>
            <div className='footer__section'>
                    <h5>Contact</h5>
                <ul>
                    <li> <PlaceIcon/> R7 Duplex Plaza-<br/>
                    First Floor UpperHill,NRB 00100 </li>
                    <li> <PhoneIcon/> : +254769587769</li>
                    <li> <MailIcon/> E:contact@ohospital.info</li>
                </ul>
            </div>     
  
        </div>
        </Paper> 
    )
}

export default Footer
