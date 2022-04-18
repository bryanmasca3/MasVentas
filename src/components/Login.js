import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({setloginState}) => {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            password: Yup.string()          
            .required('Required'),     
        }),
        onSubmit: values => {           
            axios.post('/Login',values)
              .then((response)=> {
                console.log(response);
              })
              .catch( (error)=> {
                console.log(error);
              });
        },
      });


  return (
    <form onSubmit={formik.handleSubmit}>
        <Stack
            direction="column" 
            spacing={2}
            justifyContent={'center'}
            sx={{ height: '85vh',paddingLeft:"6rem",paddingRight:"6rem",position:"relative"}}                  
        >
            
            <Typography variant="h3" component="div" gutterBottom sx={{textAlign:"center",color:"#504e54",fontWeight:700}}>
                    Login
            </Typography>
            <TextField
             id="email"
             name="email"
             type="text"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email}            
            label="Email" variant="outlined" />
              {formik.touched.email && formik.errors.email ? (
         <Typography variant="caption" display="block" sx={{color:"#f95f5f"}} gutterBottom>{formik.errors.email}</Typography>
       ) : null}
            <TextField 
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}  
            
            label="Password" variant="outlined" />
              {formik.touched.password && formik.errors.password ? (
          <Typography variant="caption" display="block" sx={{color:"#f95f5f"}} gutterBottom>{formik.errors.password}</Typography>
       ) : null}
            <Box sx={{marginBottom:"4rem"}}>
                <Stack
                direction="row" 
                justifyContent={'space-between'}
            >
                <Typography variant="caption" display="block" gutterBottom  sx={{color:"#504e54"}}>
                    Remember me
                </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{fontWeight:700,color:"#6f7bf7"}}>
                    Recovery password
                </Typography>
            </Stack>
            </Box>
            <Button sx={{color:"#fff",paddingTop:"1rem",paddingBottom:"1rem", backgroundImage: `linear-gradient(to right,#9bf8f4, #6f7bf7)`}} type="submit">Sign In</Button>
            <Typography variant="caption" display="block" gutterBottom  sx={{position:"absolute",bottom:0,left:0,textAlign:"center", width:"100%",color:"#504e54"}}>
                    Don't have an account yet? <span style={{fontWeight:700,color:"#6f7bf7",cursor:"pointer"}} onClick={()=>setloginState(0)} >Sign Up</span>
                </Typography>
              
        </Stack>
        </form>
  )
}

export default Login