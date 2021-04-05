import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='navigation__logo'>
            <h1>ohospital</h1>
            <img src='' alt=''/>
            </div>
                <div className='navigation__links'>
                    <Link to='/'>
                        <span className='navigation__link'>Home</span>
                    </Link>
                    <Link to='/Doctors'>
                        <span className='navigation__link'>Doctor</span>
                    </Link>

                    <Link to='/Pharmacy'>
                        <span className='navigation__link'>Pharmacy</span>
                    </Link>
                    <Link to='/Account'>
                        <span className='navigation__link'>Account</span>
                    </Link>                
                </div>
        </div>
    )
}

export default Navigation
