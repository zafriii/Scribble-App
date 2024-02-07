import React , {useEffect, useState} from 'react'
import './navbar.css'
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

  const { isAuthenticated,  loginWithRedirect , logout} = useAuth0();


  return (
    <>
    
    
    
    <nav>
        <div className="navbar">
            <div className="nav-logo">
                <h1>Scribble</h1>
            </div>


            {

          isAuthenticated ? (

                <button className='logout' onClick={() => logout ({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>

           

          ) : 
          
          (
           
              <button className='login' onClick={() => loginWithRedirect()}>Log In</button>

          )


          }
            
        </div>
            
      
    </nav>
    
     </>   
    
    
   
  )
}

export default Navbar
