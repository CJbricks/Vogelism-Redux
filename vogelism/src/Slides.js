import React from 'react';
import { useState } from 'react';
import './Slides.css';


export default function Slides() {
    const quoteArray = ["I want to see dudes, fucking dudes, side to side.", "If a Nazi walks through those doors kick him in the f$%#@&g face.", "I'm 40 years old. A lot of you look 20..18.. something like that." ]

    const [index, setIndex] = useState(0);

    return (
        <div className="text-area">
            <h1 className="quote-box" onClick={() => index === quoteArray.length ? setIndex(0) : setIndex(index + 1)} >{quoteArray[index]}</h1>
                <p className="signature" >-Scott Vogel</p>
        </div>
    )
}

