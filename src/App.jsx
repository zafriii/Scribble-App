import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import BeforeLogin from './components/beforelogin'
import AfterLogin from './components/AfterLogin'
import Footer from './components/Footer'


function App() {
   
  
  return (
    <>
      
 <BrowserRouter>

        <Navbar/>
        
              <Routes>                

                  <Route path='/' element={<BeforeLogin/>}/>
                  <Route path='/afterlogin' element={<AfterLogin/>}/>
                  <Route path='/todos' element={<TodoApp/>}/>
                 
              </Routes>
              
        <Footer/>
              
        
        </BrowserRouter>


    </>
  )
}

export default App
