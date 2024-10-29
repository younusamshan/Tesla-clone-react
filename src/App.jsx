import { useState } from 'react'
import Imageurl from './components/Home/assets/model-3.jpg'
import Imageur2 from './components/Home/assets/model-s.jpg'
import Imageur3 from './components/Home/assets/model-x.jpg'
import Imageur4 from './components/Home/assets/model-y.jpg'
import Imageur5 from './components/Home/assets/new-interior.jpg'
import Imageur6 from './components/Home/assets/solar-panel.jpg'
import Imageur7 from './components/Home/assets/solar-roof.jpg'
import Imageur8 from './components/Home/assets/accessories.jpg'
import './App.css'
import Header from './components/Header/app.jsx'
import Home from './components/Home/App.jsx'
import styled from 'styled-components'
// import Sectio from './components/Sectio/app.jsx'
function App() {
  // const [count, setCount] = useState(0)
console.log('uuuu')
  return (
   <container className='container'>
   <Header />

       <Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageurl} />

<Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageur3}/>


<Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageur4}/>
     


     <Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageur5}/>
     

     
<Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageur2}/>




     <Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageur6}/>
     
   

     <Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageur7}/>



<Home 
    modal='Modal S'
    title='Model S is built from the ground up as an electric vehicle, with a high-strength architecture '
    buttonLift='custom order'
    buttonRight='existing inventory'
    Imageurl={Imageur8}/>


     
   
   </container>
  )
}

export default App


// const container = styled.dev`
// height: 100vh;
// text-align: center;
// `