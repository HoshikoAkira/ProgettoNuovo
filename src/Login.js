import React from 'react'
import {useRef,useEffect,useState,useContext} from 'react';

// import { AuthContext } from "./context/authprovider";

import AppAppBar from "../src/template/modules/views/AppAppBar"
import AppForm from "../src/template/modules/views/AppForm";
import Typography from './template/modules/components/Typography';
import FormButton from './template/modules/form/FormButton';




const Login = () => {

// const {setAuth}=useContext(AuthContext);

        const userRef= useRef();
    
    const errRef=useRef(); 

    const [user,setUser]=useState("");
    const [pwd,setPwd]=useState("");
    const [errMsg,setErrMg]=useState("");
    const [success,setSuccess]=useState(false);

    useEffect(()=>{
        userRef.current.focus();
        
    },[])
    
    useEffect(()=>{
        setErrMg("");
        
    },[user,pwd])

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(user,pwd)
        setSuccess(true);
    }

  return (
  <>
  
   <AppAppBar />
   <AppForm>
  
   <Typography variant="h3" gutterBottom marked="center" align="center">
            Login
          </Typography>   
  {success?(
       
    <section>
        <h1>Sei Loggato</h1>
        <br/>
        <p>
            <a href='#'>Go!</a>
        </p>
    </section>
 ):(
    <section>
  <p ref={errRef} className={errMsg? "errmsg": "offscreen"}aria-live='assertive'>{errMsg}</p>

  <form onSubmit={handleSubmit}>
    <label htmlFor='username'>UserName</label>
    <input
      id="username" 
      type='text '
      ref={userRef}
      autoComplete='off'
      label=""
      onChange={(e)=>setUser(e.target.value)}
      value={user}
      // disabled={submitting || sent}
      required
    />

<label htmlFor='password'>Password</label>
    <input
      id="password" 
      type='password'
      ref={userRef}
      autoComplete='off'
      label=""
      onChange={(e)=>setPwd(e.target.value)}
      value={pwd}
      required
    />
 <FormButton
                sx={{ mt: 3, mb: 2 }}
                // disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              
                href="/sondaggi"

              >
                 </FormButton>
  </form>


    </section>
 
 )}
 </AppForm>
 </>
  )
}

export default Login