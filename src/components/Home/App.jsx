import React from 'react'
import './app.css'
// import bg  from '../../assets/model-3.jpg'
// import styled from 'styled-components'
function Home({ modal, title, buttonLift,  buttonRight, Imageurl }) {
// console.log(bg)
  // let imgurl = '(../../assets/model-s.jpg)'
  return (
    < div  className='homeContaner'
   style={{
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${Imageurl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
   }}
    >

      {/* <img src={imgurl} alt='img url' /> */}
       <dev className='homeTextGroup'>
            <dev>
                 <h1>{modal}</h1>
                 <p>{title}</p>
            </dev>
            <dev className='homeTextEnd'>
              <dev className='homeButtonGroup'>
              <button className='homeLiftButton'>{buttonLift}</button>
              <button className='homeLastButton'>{ buttonRight}</button>
              </dev>
            <dev className='homeArrow'>
            <svg xmlns='http://www.w3.org/2000/svg' fill="white" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
            </dev>
            </dev>

       </dev>
    </ div>
  )
}

// const BackgroundDiv = styled.div`
//   background-image: url(${backgroundImageurl});
//   background-size: cover;        // Optional: to cover the entire area
//   background-position: center;   // Optional: to center the image
//   height: 400px;                 // Example height
//   width: 100%;                   // Example width
// `;

//  const homeContaner = styled.dev`
//  background-image:  "url('../../assets/model-s.jpg')"
//  `
export default Home