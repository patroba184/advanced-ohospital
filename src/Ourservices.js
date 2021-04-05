import React from 'react'
import './Ourservices.css'
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import CommuteIcon from '@material-ui/icons/Commute';
import Grid from '@material-ui/core/Grid'
import { Card, CardContent, TextField, Typography ,Button} from '@material-ui/core';
import {Paper,makeStyles} from '@material-ui/core'
import Form from './Form';

const useStyles=makeStyles({
    ourservices__card:{
        backgroundColor:'#fff',
        textAlign:'center',
        alignItems:'center',
        margin:'5px',
        padding:'10px'
    },

    card:{
        textAlign:'left',
        alignItems:'center',
        display:'flex',
        margin:'10px',
        padding:'10px',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },

        '&:h5':{
            fontSize:'16px',
            fontWeight:'400'
        }
        
    },

    

    icon:{
        color:'blue'
    },

    textfield:{
        margin:'10px',
        flexGrow:'1',
        backgroundColor:'#fff'
    }

    
    
});

const Ourservices = () => {

    const classes=useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <div className='ourservices__row'>
                    <Grid item xs={4}  className={classes.ourservices__card}>
                        <BrightnessHighIcon className={classes.icon}/>
                            <h5>DOCTOR MANAGEMENT SYSTEM</h5>
                                <p>
                                    Everyday a doctor serves 50-100 patients,75% of
                                    these patients depend on traditional ways of
                                    storing data.With Ohospital DMS a Doctor can
                                    manage the patient in one place
                                </p>
                    </Grid>
                    <Grid item xs={4} className={classes.ourservices__card}>
                        <CloudQueueIcon className={classes.icon}/>
                            <h5>HOSPITAL MANAGEMENT SYSTEM</h5>
                                <p>
                                    Our hospital management is hosted over the
                                    cloud and fit any size of the hospital with
                                    option of own customize
                                </p>
                    </Grid>
                    <Grid item xs={4} className={classes.ourservices__card}>
                        <GroupAddIcon className={classes.icon}/>
                            <h5>ECOMMERCE</h5>
                            <p>
                                Buying of health products is easy with Ohospital 
                                App and portal,with a few clicks the product is
                                bought and delivered to your place.
                            </p>
                    </Grid>
                    </div>
                    <div className='ourservices__row'>
                    <Grid item xs={4}  className={classes.ourservices__card}>
                        <BrightnessHighIcon className={classes.icon}/>
                            <h5>DOCTOR MANAGEMENT SYSTEM</h5>
                                <p>
                                    Everyday a doctor serves 50-100 patients,75% of
                                    these patients depend on traditional ways of
                                    storing data.With Ohospital DMS a Doctor can
                                    manage the patient in one place
                                </p>
                    </Grid>
                    <Grid item xs={4} className={classes.ourservices__card}>
                        <CloudQueueIcon className={classes.icon}/>
                            <h5>HOSPITAL MANAGEMENT SYSTEM</h5>
                                <p>
                                    Our hospital management is hosted over the
                                    cloud and fit any size of the hospital with
                                    option of own customize
                                </p>
                    </Grid>
                    <Grid item xs={4} className={classes.ourservices__card}>
                        <GroupAddIcon className={classes.icon}/>
                            <h5>ECOMMERCE</h5>
                            <p>
                                Buying of health products is easy with Ohospital 
                                App and portal,with a few clicks the product is
                                bought and delivered to your place.
                            </p>
                    </Grid>
                    </div>
                </Grid>
            </Grid>

            <Grid container>

                
                <Grid item xs={12}>
                    <div className='product__container'>
                    <Grid item xs={6}>
                    <div>
                            <spa>Ohospital mission</spa>
                                <h3>Details of Ohospital Plartform</h3>
                                    <p>
                                        Can we do with healthcare what google did with information?make it accessible;put
                                        it in the hands of every human on earth?Ohospital aim is to make medical services
                                        available to everyone and everytime.Our work of art is driven by passion and people at
                                        heart and the love for our communities.To use health is a right and everyone should be
                                        able to get treated whether they can pay or not.
                                    </p>
                                        <button>READ MORE</button>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='product'>
                                <img src='https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGRvY3RvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
                        </div>
                    </Grid>
                    </div>
                </Grid>
            </Grid>

            <div className='awesome__heading'>
                <h2>Awesome Features</h2>
            </div>
            <div className='features__container'>
                <div>
                             <Card className={classes.card}>
                                <div>
                                    <h5>Doctor Module</h5>
                                        <span>Ohospital Offers Doctor management
                                            System which helps doctors manage,
                                            track,monitor patients progress.
                                        </span>
                                </div>
                                         <div>
                                                <MenuBookIcon/>    
                                        </div>
                            </Card>
                            <Card className={classes.card}>
                                <div>
                                    <h5>Payment</h5>
                                        <span>
                                            Our System supports different 
                                            methods of payment,with the option 
                                            of customizing.
                                        </span>
                                </div>
                                            <div>
                                                <MenuBookIcon/>    
                                            </div>
                            </Card>
                            <Card className={classes.card}>
                                <div>
                                    <h5>Doctor Management</h5>
                                        <span>
                                            A Doctor servicing a number
                                            patients daily may have issues
                                            organizing and the process is time 
                                            consuming.Ohospital reduces the process
                                            to a few clicks of buttons
                                        </span>
                                </div>
                                            <div>
                                                <MenuBookIcon/>    
                                            </div>
                            </Card>
                </div>
                <div className='features__image'> 
                    <img src='' alt=''/>
                </div>
                <div>
                <Card className={classes.card}>
                                <div>
                                    <h5>Modern Design</h5>
                                        <span>
                                            User Expirience is the key to any
                                            system,Ohospital has automated
                                            background services to ensure patients 
                                            get services faster.
                                        </span>
                                </div>
                                            <div>
                                                <MenuBookIcon/>    
                                            </div>
                            </Card>
                            <Card className={classes.card}>
                                <div>
                                    <h5>Patient Monitorig</h5>
                                        <span>
                                            Most pre-condition patients have to 
                                            see a doctor and share their progress,
                                            the information may be accurate
                                            but Ohospital tailor made progress.
                                        </span>
                                </div>
                                            <div>
                                                <MenuBookIcon/>    
                                            </div>
                            </Card>
                            <Card className={classes.card}>
                                <div>
                                    <h5>24/7 Support</h5>
                                        <span>
                                            We value feedback and that is why we have 
                                            a dedicated team to offer solutions on
                                            the go and at any time.
                                        </span>
                                </div>
                                        <div>
                                            <MenuBookIcon/>    
                                        </div>
                            </Card>
                </div>
            </div>
                <div className='contact__heading'>
                    <h2>Contact Us</h2>
                </div>
                <div className='contact__container'>
                    <Grid item xs={12} container spacing={3}>
                            <Grid item xs={6} container direction='column'>
                                    <TextField className={classes.textfield} label="Name" variant="outlined" />
                                    <TextField  className={classes.textfield} label="Email" variant="outlined" />
                                    <TextField  className={classes.textfield} label="Subject" variant="outlined" />
                                    <TextField  className={classes.textfield} label="Your Message" variant="outlined" />
                                    <Button variant='contained' color='primary'>SEND MESSAGE</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <div><h4>map</h4></div>
                            </Grid>
                    </Grid>
                </div>
        </>
    
    )
}

export default Ourservices
