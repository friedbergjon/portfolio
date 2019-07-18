import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <nav className = "Nav">
  <div className = "Header">
    
  <div>
    <br></br>
  <h1 className = "Title">Jonathan Friedberg</h1>
</div>
 <br></br>
</div>
    </nav>
    
    <div className="Links">
      <div className="LinkOne">
     <a target="_blank" href="https://giftme-hjm.herokuapp.com/">"Wish List App" using React and Express</a>

     </div>
     <div className="LinkTwo">
     {/* https://stackoverflow.com/questions/42914666/react-router-external-link */}
     <a target="_blank" href="https://amazing-rings.surge.sh">Currency Converter using React</a>
     </div>
     <div className="LinkThree">
     <a target="_blank" href="https://pages.git.generalassemb.ly/friedbergjon/frogger/">"Frogger- The Game" made with Vanila Javascript</a>
     </div>
     <div className="SkillsAndSoftware">
       <h2>Skills</h2>
     <p className="SkillsParagraphText">Front-End/Back-End/Full Stack Development, Drawing, Painting, 3-D Modeling, UV Unwrapping, Storyboarding, Photography, Stereo and 5.1 Recording,Mixing, & Editing; Automated Dialogue Replacement; SFX (Foley, Soft FX, Hard FX); Onset Sound; Appropriate dB Ranges for Broadcast Standards; Studio Recording, Mixing, & Editing; Microphone Placement; Signal Flow; Live Sound Reinforcement; Soldering
    </p>
    
      <h2>Software</h2>
    <p className="SoftwareParagraphText">HTML, CSS & CSS libraries Javascript, React, Node.js, Express, Ruby, C, C++, Java, Maya, Z-Brush, 3D Studio Max, Marvellous Designer, Substance Painter, Final Cut Pro, Adobe Suite: Premiere; Audition; Illustrator; Photoshop; After Effects; In Design, TextMate, ProTools, Logic Pro, Reason, Symphonic Orchestra, Symphonic Choirs, Word Builder, Garage Band, DVD Compressor
    </p>
    </div>
    </div>
    </div>
  );
}

export default App;
