
import React from 'react'
import{useState} from 'react'
import {Grid,TextField} from '@material-ui/core'
const Form = () => {


    const initialValues={
        fullname:'',
        Email:'',
        Subject:'',
        YourMessage:''
    }

    const[values,setvalues]=useState(initialValues);

    return (
        <div>
            <form>
                <Grid container >
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            label='Fullname'
                            value={values.fullname}
                        />
                        <TextField
                            variant='outlined'
                            label='Email'
                            value={values.Email}
                        />
                        <TextField
                            variant='outlined'
                            label='subject'
                            value={values.subject}
                        />
                        <TextField
                            variant='outlined'
                            label='YourMessage'
                            value={values.YourMessage}
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Form

