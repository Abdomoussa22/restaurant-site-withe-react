import React from 'react'
import './header.css'
const Header = () => {
    return ( 
        <>
        <header>
            <div className='container'>
                <div className='col-lg-6'>
                    <h2>Good food choices are good investments.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button  className='btn1 '> Order Now</button>
                    <button className='btn2'>Learn More</button>
                </div>
                <div className='col-md-6'>

                </div>
            </div>

        </header>
        </>
     );
}
 
export default Header;