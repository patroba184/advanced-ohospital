import React from 'react'
import Footer from './Footer'
import './Home.css'
import Ourservices from './Ourservices'
const Home = () => {
    return (
        <div className='home'>
        <div className='home__row'>
        <div className='home__paragraph'>
                <h1>ohospital app DHS & SaaS <br/> Health Solutions</h1>
                <p>Ohospital connects doctors and patients anytime and anywhere Doctors manage how they offer <br/>
                 services and track patients progress from anywhere.</p>
                <div className='home__buttons'>
                    <button className='home__buttonone'>DOWNLOAD APP</button>
                    <button className='home__buttontwo'>LEARN MORE</button>
                </div>
            </div>
            <div className='home__image'>
                <img src='https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
            </div>
        </div>

            <div className='home__services'>
                <h1>Our Services</h1>
            </div>
            <Ourservices/>
         </div>

    )
}

export default Home
