import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const Register = ({setloginState}) => {
    const formik = useFormik({
        initialValues: {
          fullname: '',
          email: '',
          password: '',
          repassword:''
        },
        validationSchema: Yup.object({
            fullname: Yup.string()           
            .required('Required'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            password: Yup.string()          
            .required('Required'),   
            repassword: Yup.string()          
            .oneOf([Yup.ref('password'), null], "Passwords don't match!")
            .required('Required')
        }),
        onSubmit: values => {           
            axios.post('/Register',values)
              .then((response)=> {
                console.log(response);
              })
              .catch( (error)=> {
                console.log(error);
              });
        },
      });
  return (  <form onSubmit={formik.handleSubmit}>
    <Stack
            direction="column" 
            spacing={2}
            justifyContent={'center'}
            sx={{ height: '85vh',paddingLeft:"6rem",paddingRight:"6rem",position:"relative"}}                  
        >
            <Typography variant="h3" component="div" gutterBottom sx={{textAlign:"center",color:"#504e54",fontWeight:700}}>
                    Register
            </Typography>
            <TextField 
             id="fullname"
             name="fullname"
             type="text"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.fullname}         
            
            label="Full Name" variant="outlined" />   
             {formik.touched.fullname && formik.errors.fullname ? (
         <Typography variant="caption" display="block" sx={{color:"#f95f5f"}} gutterBottom>{formik.errors.fullname}</Typography>
       ) : null}         
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
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password} 
            label="Password" variant="outlined" />
             {formik.touched.password && formik.errors.password ? (
         <Typography variant="caption" display="block" sx={{color:"#f95f5f"}} gutterBottom>{formik.errors.password}</Typography>
       ) : null}   
            <TextField                 
            type="password"
            id="repassword"
            name="repassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repassword}         
            label="Confirm Password" variant="outlined" />
              {formik.touched.repassword && formik.errors.repassword ? (
         <Typography variant="caption" display="block" sx={{color:"#f95f5f"}} gutterBottom>{formik.errors.repassword}</Typography>
       ) : null}  
          
            
            <Button sx={{color:"#fff",paddingTop:"1rem",paddingBottom:"1rem", backgroundImage: `linear-gradient(to right,#9bf8f4, #6f7bf7)`}} type="submit"> Sign Up</Button>
            <Typography variant="caption" display="block" gutterBottom  sx={{position:"absolute",bottom:0,left:0,textAlign:"center", width:"100%",color:"#504e54"}}>
                    Already have an account? <span style={{fontWeight:700,color:"#6f7bf7",cursor:"pointer"}} onClick={()=>setloginState(1)}>Sign in</span>
                </Typography>
        </Stack></form>
  )
}

export default Register