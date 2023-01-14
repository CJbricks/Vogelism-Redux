import React from 'react'
import meme from './/images/memevogel.jpg';
import './Splash.css';

export default function Splash() {
    
    return (
        <div>
            <img 
                src={meme}
                alt="meme-logo"
                className="meme"/>
        </div>
    )
}
