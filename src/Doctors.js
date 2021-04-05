import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';
import StarRateIcon from '@material-ui/icons/StarRate';
import './Doctor.css'
import Rating from './Rating';
const Doctors = () => {
    return (
        <div className='container'>
            <div className='container__left'>
                <div className='container__search'>
                    <input type='text' className='container__searchInput'
                        value='Search'
                    />
                <div className='searchIcon'>
                        <SearchIcon fontSize='medium' />
                </div>
                </div>
                <div className='container__row'>
                    <div className='product'>
                        <img src='https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvY3RvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
                            <div className='product__info'>
                                <p>Colbu Cruz</p>
                                    <Rating
                                        rating={5}
                                    />
                            </div>
       
                    </div>
                    <div className='product'>
                        <img src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60' alt=''/>
                            <div className='product__info'>
                                <p>Colbu Cruz</p>
                                    <Rating
                                        rating={5}
                                    />
                            </div>
       
                    </div>
                    <div className='product'>
                        <img src='https://images.unsplash.com/photo-1584467735815-f778f274e296?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
                            <div className='product__info'>
                                <p>Colbu Cruz</p>
                                    <Rating
                                        rating={5}
                                    />
                            </div>
       
                    </div>
                </div>
                <div className='container__row'>
                    <div className='product'>
                        <img src='https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvY3RvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
                            <div className='product__info'>
                                <p>Colbu Cruz</p>
                                    <Rating
                                        rating={5}
                                    />
                            </div>
       
                    </div>
                    <div className='product'>
                        <img src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60' alt=''/>
                            <div className='product__info'>
                                <p>Colbu Cruz</p>
                                    <Rating
                                        rating={5}
                                    />
                            </div>
       
                    </div>
                    <div className='product'>
                        <img src='https://images.unsplash.com/photo-1584467735815-f778f274e296?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
                            <div className='product__info'>
                                <p>Colbu Cruz</p>
                                    <Rating
                                        rating={5}
                                    />
                            </div>
       
                    </div>
                </div>
            </div> 

            <div className='container__right'>
                    <div className='category__container'>
                        <h2>Doctors Category</h2>
                            <strong>_______</strong>
                            <div className='category__info'>
                                <div className='doctors__name'>
                                    <ul>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Physician</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Paediatricians</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Allergists</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Dematologists</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Opthalmologists</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Oncologists</span></li>
                                    </ul>
                                </div>
                                <div className='doctors__nameRight'>
                                    <ul>
                                        <li>(83)</li>
                                        <li>(198)</li>
                                        <li>(95)</li>
                                        <li>(48)</li>
                                        <li>(210)</li>
                                        <li>(78)</li>
                                    </ul>
                                </div> 
                            </div>

                    </div>
                    <div className='featured__category'>
                        <h4>Featured Doctors</h4>       
                    </div>

                    <div className='featured__category'>
                        <h2>Our doctors</h2>
                            <div className='category__info'>
                                <div className='doctors__name'>
                                    <ul>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Dr Cliff</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Dr Joy</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Dr Owiti</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Dr Simon</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Dr Jackson</span></li>
                                        <li><ArrowForwardIcon fontSize='small'/><span>Dr Thumbi</span></li>
                                    </ul>
                                </div>
                                <div className='doctors__nameRight'>
                                    <ul>
                                        <li>(45)</li>
                                        <li>(34)</li>
                                        <li>(67)</li>
                                        <li>(74)</li>
                                        <li>(69)</li>
                                        <li>(28)</li>
                                    </ul>
                                </div> 
                            </div>
                    </div>
            </div> 
        </div>

    )
}

export default Doctors
