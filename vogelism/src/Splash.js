import React from 'react'
import meme from './/images/memevogel.jpg';
import './Splash.css';
import memeLong from './/images/memelong.png';

export default function Splash() {
    
    return (
        <>
            <div className="wide">
                <img 
                    src={meme}
                    alt="front-page-logo"
                    className="meme"/>
            </div>
            <div className="long">
                <img
                    src={memeLong}
                    alt="media-front-page-logo"
                    className="media-meme"
                    />
                <p className="enter-text" >ENTER</p>
            </div>
        </>
    )
}
