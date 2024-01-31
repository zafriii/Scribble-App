// import React, {useEffect,useState, useCallback, useRef} from 'react'
// import './hero.css'
// import { useAuth0 } from "@auth0/auth0-react";

// function Hersection() {

// const {user, isAuthenticated} = useAuth0();    

// const textRef = useRef(null);

// const [text, setText] = useState('');
// const [textareaHeight, setTextareaHeight] = useState('auto');



// const handleChange = (event) => {
//     setText(event.target.value);
//     const newText = event.target.value;
//     setText(newText);
//     localStorage.setItem('textareaText', newText);
//   }; 
  
//   useEffect(() => {
    
//     const newHeight = `${event.target.scrollHeight}px`;
//     setTextareaHeight(newHeight);

//     const savedText = localStorage.getItem('textareaText');
//     if (savedText) {
//       setText(savedText);
//     }


//   }, [text]);

//    const copyText = useCallback(() => {

//     textRef.current.select();
//     window.navigator.clipboard.writeText(text);

//    }, [text]);


   
   

//   return (

//    <>

//    {
    

//     isAuthenticated ? (

//     <div className="container">

//         <p className="username">{user.name}'s Note</p>    
    
//      <textarea name="text-field" id="text-field"  rows="25"
//      value={text}
//      onChange={handleChange}
//      style={{ height: textareaHeight }}
//      ref={textRef}></textarea>


//     <button className='copy' onClick={copyText}>Copy</button>

    
//     </div>
//     ) : 

    
//     (
//          <div className="section">

//                 <h1>Welcome to <span>Scribble</span></h1>
//                 <p className='typing-demo'>Scribble Helps You to Make Your Notes Faster</p>
//                 <h3>Login to Continue</h3>

//         </div>      

//     )
    
    
//     }

       
//     </>
//   )
// }

// export default Hersection