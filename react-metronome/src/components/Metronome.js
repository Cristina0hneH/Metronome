import React from 'react';
import './Metronome.css';
import {useState} from 'react';
import click1 from "../components/click1.wav";
 
export default function Metronome() {
    // bpm is going take the value of the imput type range; 
    //setStates for playing&bpm
    const [playing, setPlaying] = useState(false);
    const [bpm, setBpm]= useState(100)
    const audioClick1= new Audio(click1);

    const handleBpmChange = (e) =>{
        const slide = e.target.value;
        setBpm(slide);

    }

    const handleClick = ()=>{
      audioClick1.play();

    }

    
    
   
    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input type="range" min="60" max="240" value={bpm} onChange={handleBpmChange} />
        </div>
        <button onClick={handleClick}>{playing ? 'Stop' : 'Start'}</button>
      </div>
    );
}