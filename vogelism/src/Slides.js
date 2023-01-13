import React from 'react';
import { useState } from 'react';
import './Slides.css';

export default function Slides() {
    const quoteArray = ["wWMore stage dives in the monitors!", "If a Nazi walks through those doors kick him in the f$%#@&g face.", "I'm 40 years old. A lot of you look 20..18.. something like that." ]

    const [index, setIndex] = useState(0);

    

    return (
        <div className="text-area">
            <h1 className="quote-box" onClick={() => setIndex(index + 1)} >{quoteArray[index]}</h1>
        </div>
    )
}

