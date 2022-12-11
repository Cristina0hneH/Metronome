import React from 'react';
import './Metronome.css';
import {useState} from 'react';
 
export default function Metronome() {
    // bpm is going take the value of the imput type range; 
    //setStates for playing&bpm
    const [playing, setPlaying] = useState(false);
    const [bpm, setBpm]= useState(100)

    const handleBpmChange = (e) =>{
        const slide = e.target.value;
        setBpm(slide);

    }

    const handleClick = ()=>{

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