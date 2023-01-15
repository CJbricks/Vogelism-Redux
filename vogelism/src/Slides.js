import React from 'react';
import { useState } from 'react';
import './Slides.css';


export default function Slides() {
    const quoteArray = [
        "I want to see you cast a level 7 difficulty stagedive.",
        "If a Nazi walks through those doors kick him in the fucking face.",
        "I'm 40 years old. A lot of you look 20..18.. something like that.",
        "Maximum output. Activate the pit.",
        "Fuck these keyboards in our scene.",
        "Battlefield Ignite.",
        "I want to see 1000 stage dives per song.",
        "I want to see dudes fucking up dudes, front to back, side to side.",
        "Hows everyone in the back with their fucking slurpees?",
        "Dont worry where you land, the floor will break your fall.",
        "Stage dives make me feel alive."
     ]

    const [index, setIndex] = useState(0);

    return (
        <div className="text-area">
            <h1 className="quote-box" onClick={() => index === quoteArray.length - 1 ? setIndex(0) : setIndex(index + 1)} >{quoteArray[index]}</h1>
                <p className="signature" >-Scott Vogel</p>
        </div>
    )
}

