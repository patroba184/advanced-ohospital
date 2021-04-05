import React from 'react'
import './Pharmacy.css'
const Pharmacy = () => {
    return (
        <div className='pharmacy__container'>
            <div className='pharmacy__containercontents'>
                <div className='pharmacy__containercontentsleft'>
                    <div className='product__card'>
                        <h1>
                            anjolie graves
                        </h1>
                            <span>590</span>
                    </div>
                </div>
                <div className='pharmacy__containercontentsright'></div>
            </div>
            <div className='pharmacy__containerproducts'>

            </div>
        </div>
    )
}

export default Pharmacy
