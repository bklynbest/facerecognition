import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import vblogo from './vblogo.png'

const Logo = () => {
    return (
        <div className= 'ma4 mt0'>
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 150 }} >
                <div className="Tilt-inner pa"><img style= {{paddingTop:'px'}}alt='logo' src= {vblogo} /></div>
            </Tilt>
        </div>
    );
};
export default Logo;