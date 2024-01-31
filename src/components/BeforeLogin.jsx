import './hero.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';
import './hero.css'

function BeforeLogin() {


    const { isAuthenticated} = useAuth0();
   

  return (
    <>
   
    {
    
    isAuthenticated ? (

        <Navigate to="/afterlogin"/>            
        
    ) :
    
    
   (
   
         <div className="section">

         <h1>Welcome to <span>Scribble</span></h1>
         <p className='typing-demo'>Scribble Helps Making Notes Faster</p>
         <h3>Login to Continue</h3>

        
 </div>   


    )
    
}
    
    </>
  )
}

export default BeforeLogin