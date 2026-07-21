import {
  useNavigate,
} from 'react-router-dom'
import { useState } from 'react';
import '../styles/pages.css'
import '../styles/index.css'
import logo from '../assets/logo.png';
import portfolio from '../assets/content/portfolio.png';
import flute from '../assets/content/flute.png';
import minicraft from '../assets/content/minicraft.png';
import tomato from '../assets/content/tomato.png';
import sparky from '../assets/content/sparky.png';

import fluteReport from '../assets/pdfs/magic-flute.pdf';
import minicraftReport from '../assets/pdfs/minicraft-slides.pdf';

const tabContent = {
  div1: (
    <div className="content-inner" >
        <h1 className="content-title">Oscilloscope portfolio</h1>
        <div className="project-image-container">
            <img className="content-image" src={portfolio} alt="Portfolio" />
            <div className="link-box">
                <div className="link-box-inner">
                    <span className="project-tag">THREE.js</span>
                    <span className="project-tag">React</span>
                    <span className="project-tag">Blender</span>
                    <span className="project-tag">Figma</span>
                </div>
            </div>
        </div>
        <p className="content-text">This portfolio website showcases my work and technical interests. 
            It is still a work in progress, and I am excited to refine it more. 
            I modeled the oscilloscope in Blender from scratch and learned a lot about topology, UV unwrapping, and texture baking. 
            This website was inspired by Henry Heffernan's and Jesse Zhou's portfolios.</p>
    </div>
  ),
  div2: (
    <div className="content-inner">
      <h1 className="content-title">Sparky</h1>
      <div className="project-image-container">
            <img className="content-image" src={sparky} alt="Sparky" />
            <div className="link-box">
                <div className="link-box-inner">
                    <span className="project-tag">LTSpice</span>
                    <span className="project-tag">Altium Designer</span>
                </div>
            </div>
        </div>
        <p className="content-text">Sparky is a PCB that captures ESD events (shocks) and turns on an LED via a 555 timer in monostable mode.
            In the near future, I plan to model an enclosure for the PCB in the shape of an angler fish, which will be 3D printed. 
            Size was a major consideration in the design of the PCB, as I want Sparky to be like a fridge magnet.
            The PCB will be placed inside the enclosure, and the angler fish's "lure" will be the LED that turns on if a shock is detected.
            I modelled the circuit in LTSpice, modelling the shock with the standard HBM and IEC 61000-4-2 ESD models.
        </p>
    </div>
  ),
  div3: (
    <div className="content-inner">
      <h1 className="content-title">Magic Flute</h1>
      <div className="project-image-container">
            <img className="content-image" src={flute} alt="Flute" />
            <div className="link-box">
                <a className="project-link" href={fluteReport} target="_blank" rel="noopener noreferrer">
                    Take a look
                </a>
                <div className="link-box-inner">
                    <span className="project-tag">C</span>
                    <span className="project-tag">FPGA</span>
                    <span className="project-tag">NIOS V</span>
                    <span className="project-tag">Fusion360</span>
                </div>
            </div>
        </div>
        <p className="content-text">
            Magic Flute is a project I worked on in my computer organization course. 
            It is a digital implementation of a flute using an FPGA. I designed the flute keys in Fusion360 and 3D printed them. 
            The keys act as switches that are read by the FPGA, which generates the corresponding sound using a NIOS V processor. 
            A microphone is also used to detect if a user is blowing into the flute, and the sound is only generated if the user is blowing.
        </p>
    </div>
  ),
  div4: (
    <div className="content-inner">
      <h1 className="content-title">Minicraft</h1>
      <div className="project-image-container">
            <img className="content-image" src={minicraft} alt="Minicraft" />
            <div className="link-box">
                <a className="project-link" href={minicraftReport} target="_blank" rel="noopener noreferrer">
                    Take a look
                </a>
                <div className="link-box-inner">
                    <span className="project-tag">Verilog</span>
                    <span className="project-tag">FPGA</span>
                </div>
            </div>
        </div>
        <p className="content-text">
            Minicraft is a project I worked on in my digital systems course. It was built with Verilog on an FPGA, using MIF-initialized ROM for tile maps to support real-time
            map updates. I created gameplay logic including inventory management, block placement, and debugged modular components in ModelSim before integration.
        </p>
    </div>
  ),
  div5: (
    <div className="content-inner">
      <h1 className="content-title">Tomato Block</h1>
      <div className="project-image-container">
            <img className="content-image" src={tomato} alt="Tomato Block" />
            <div className="link-box">
                <a className="project-link" href="https://apps.apple.com/ca/app/tomato-block/id6751349777" target="_blank" rel="noopener noreferrer">
                    Take a look
                </a>
                <div className="link-box-inner">
                    <span className="project-tag">SwiftUI</span>
                    <span className="project-tag">Figma</span>
                    <span className="project-tag">Fusion360</span>
                </div>
            </div>
        </div>
        <p className="content-text">
            Tomato Block is an iOS app I created that uses NFC tags to manage app time limits.</p>
    </div>
  ),
};


function Projects() {
  const navigate = useNavigate()
  const [activeDiv, setActiveDiv] = useState('div1')

  const handleButtonClick = (divId) => {
    setActiveDiv(activeDiv === divId ? activeDiv : divId)
  }
 
  return (
    <>
      <div className="screen-container">
        <div className="content-container">
            {tabContent[activeDiv]}
        </div>
        <div className="nav-container">
            <div className="nav-container-inner-logo">
                    <img id="logo" src={logo} alt="Logo" />
                </div>
            <div className="nav-container-inner" style={activeDiv === 'div1'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>Portfolio</h2>
            </div>
            <div className="nav-container-inner" style={activeDiv === 'div2'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>Sparky</h2>  
            </div>
            <div className="nav-container-inner" style={activeDiv === 'div3'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>Magic Flute</h2>
            </div>
            <div className="nav-container-inner" style={activeDiv === 'div4'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>Minicraft</h2>
            </div>
            <div className="nav-container-inner" style={activeDiv === 'div5'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>Tomato Block<br />iOS app</h2>
            </div>
        </div>
      </div>
      <div className="button-container-outer"></div>

      <div className="button-container-outer">
        <div className="button-container-inner">

            <button id="back-button" onClick={() => navigate(-1)}>
                Back
            </button>

            <button key={1}
            onClick={() => handleButtonClick('div1')}>
                1
            </button>

            <button key={2}
            onClick={() => handleButtonClick('div2')}>
                2
            </button>

            <button key={3}
            onClick={() => handleButtonClick('div3')}>
                3
            </button>

            <button key={4}
            onClick={() => handleButtonClick('div4')}>
                4
            </button>

            <button key={5}
            onClick={() => handleButtonClick('div5')}>
                5
            </button>
        </div>
        </div>
    </>

)
}

export default Projects