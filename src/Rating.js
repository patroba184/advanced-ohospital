import React from 'react'
import './Rating.css'
import StarRateIcon from '@material-ui/icons/StarRate';
const Rating = ({rating}) => {
    return (
        <div className='product__rating'>
            {
                Array(rating)
                .fill()
                .map((_)=>(
                    <StarRateIcon fontSize='small' color='primary'/>
                )
                )
            }
        </div>
    )
}

export default Rating
