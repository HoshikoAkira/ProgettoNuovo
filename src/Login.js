// import React from 'react'
// import {useRef,useEffect,useState,useContest} from 'react';
// import TextField from '@mui/material/TextField'
// import { AuthContext } from "./context/authprovider";

// import { useContext } from "react";
// import { AuthContext } from "react-admin";

// const Login = () => {

// const {setAuth}=useContext(AuthContext);

    //     const useRef= useRef();
    
//     const errRef=useRef();

//     const [user,setUser]=useState("");
//     const [pwd,setPwd]=useState("");
//     const [errMsg,setErrMg]=useState("");
//     const [success,setSuccess]=useState(false);

//     useEffect(()=>{
//         useRef.current.focus();
        
//     },[])
    
//     useEffect(()=>{
//         setErrMg("");
        
//     },[user,pwd])

//     const handleSubmit= async(e)=>{
//         e.preventDefault();
//         console.log(user,pwd)
//         setSuccess(true);
//     }

//   return (
//   <>
//   {success?(
//     <section>
//         <h1>Sei Loggato</h1>
//         <br/>
//         <p>
//             <a href='#'>Go!</a>
//         </p>
//     </section>
//  ):(
//     <section>
//   <p ref={errRef} className={errMsg? "errmsg": "offscreen"}aria-live='assertive'>{errMsg}</p>
//   <h1>Login</h1>

//   <form onSubmit={handleSubmit}>
//     <label htmlFor='username'>UserName</label>
//     <input
//       id="username" 
//       type='text '
//       ref={useRef}
//       autoComplete='off'
//       label=""
//       onChange={(e)=>setUser(e.target.value)}
//       value={user}
//       required
//     />

// <label htmlFor='password'>Password</label>
//     <input
//       id="password" 
//       type='password'
//       ref={useRef}
//       autoComplete='off'
//       label=""
//       onChange={(e)=>setPwd(e.target.value)}
//       value={pwd}
//       required
//     />
//   </form>

// <button>Sign in</button>
//     </section>
//  )}
//  </>
//   )
// }

// export default Login