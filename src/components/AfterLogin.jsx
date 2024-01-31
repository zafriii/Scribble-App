import React, {useEffect,useState, useCallback, useRef} from 'react'
import './hero.css'

function AfterLogin() {

    const textRef = useRef(null);
    const [text, setText] = useState('');
    const [textareaHeight, setTextareaHeight] = useState('auto');

    


    const handleChange = (event) => {
        setText(event.target.value);
        const newText = event.target.value;
        setText(newText);
        localStorage.setItem('textareaText', newText);
      }; 
      
      // useEffect(() => {
        
      //   const newHeight = `${event.target.scrollHeight}px`;
      //   setTextareaHeight(newHeight);
    
      //   const savedText = localStorage.getItem('textareaText');
      //   if (savedText) {
      //     setText(savedText);
      //   }
    
    
      // }, [text]);


      useEffect(() => {
        const newHeight = `${textRef.current.scrollHeight}px`;
        setTextareaHeight(newHeight);
      
        const savedText = localStorage.getItem('textareaText');
        if (savedText) {
          setText(savedText);
        }
      }, [text]);

      
    
       const copyText = useCallback(() => {
    
        textRef.current.select();
        window.navigator.clipboard.writeText(text);
    
       }, [text]);
    
    

  return (
    <>
    
        <div className="container">

        <textarea name="text-field" id="text-field"  rows="25"
        value={text}
        onChange={handleChange}
        style={{ height: textareaHeight }}
        ref={textRef}></textarea>


        <button className='copy' onClick={copyText}>Copy</button>


        </div>
    
    
    </>
  )
}

export default AfterLogin