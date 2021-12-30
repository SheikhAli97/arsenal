import React from 'react'
import arsenalLogo from '../Assets/arsenalLogo.png'  



function Navbar() {
    return (
        <div>
        
            <nav className='nav'> 
            <img src={arsenalLogo} alt='Logo' className='img'/> 
                <ul className='nav-items'>
                    <li>About</li> 
                    <li>Players</li>
                    <li>Results</li> 
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
