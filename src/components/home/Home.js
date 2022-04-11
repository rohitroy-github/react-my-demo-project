import React from 'react'

import bootstrap from 'bootstrap';
import './Home.css';


const Home = () => {
  return (
    <div>
        <div className='header'>
            <h1>This is the header</h1> 
        </div>

        <div class="text-center">
            <img src="src\images\rohit-profile-image.jpg" class="rounded" alt="profile-image" />
        </div>
    </div>
  )
}

export default Home