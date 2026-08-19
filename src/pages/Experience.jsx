import {
  useNavigate,
} from 'react-router-dom'
import { useState } from 'react';
import '../styles/pages.css'
import '../styles/index.css'
import logo from '../assets/logo.png';
import dab1 from '../assets/content/dab1.png';
import dab2 from '../assets/content/dab.jpg';
import ieee from '../assets/content/ieee.png';
import frosh from '../assets/content/frosh.png';

const tabContent = {
  div1: (
    <div className="content-inner" >
        <h1 className="content-title" style={{ marginTop: '12px' }}>Undergraduate Research</h1>
        <div className="project-image-container">
            <div className="link-box">
                <img className="exp-image" src={dab1} alt="DAB1" />
                <img className="exp-image" src={dab2} alt="DAB2" />
            </div>
            <div className="link-box">
                <p className="content-text">
                    This summer, I worked as a research assistant in the <a className="exp-link" href="https://home.cc.umanitoba.ca/~honm3/Riga_Lab/index.html" target="_blank" rel="noopener noreferrer">RIGA Lab</a> at the University of Manitoba.
                    Alongside a PhD candidate, I built a dual active bridge converter for a solid state transformer.<br/><br/>
                    I worked on open- and closed-loop PLECS simulations, controller tuning, and exploring phase-shift modulation, soft switching, and losses. I also ran Controller Hardware-in-the-Loop testing with an RTBox and TI DSP.
                    On the hardware side, I assembled the prototype PCB, soldering 700+ components and debugging ICs.
                </p>
            </div>
        </div>
    </div>
  ),
  div2: (
    <div className="content-inner">
      <h1 className="content-title">IEEE University of Toronto Student Branch</h1>
      <div className="project-image-container">
        <div className="link-box">
                <p className="content-text" style={{ marginTop: '4px' }} >
                    As a tech team associate in my second year, I developed and co-lead two workshops on Arduino and Altium Designer. 
                    I also worked on the hardware and PCB routing for a LoRa communication device as part of our annual project.
                </p>
            </div>
            <div className="link-box" style={{ marginRight: '20px' }}>
                <img className="exp-image" src={ieee} alt="IEEE" />
            </div>
        </div>
        <p className="content-text" id="ieee-description">This year, I am a co-director leading a team of 10+ associates and organizing technical workshops and events.
                    Currently, I am hosting a summer tutorial series on PCB design with another associate, where we are teaching members how to design their own PCBs.</p>
    </div>
  ),
  div3: (
    <div className="content-inner">
      <h1 className="content-title">F!rosh Week Co-Webmaster</h1>
      <div className="project-image-container">
            <div className="link-box">
                <img className="exp-image" src={frosh} alt="Frosh" />
            </div>
            <div className="link-box">
                <p className="content-text" style={{ marginTop: '10px' }} >
                    I redesigned the 2025 orientation.skule.ca website with a team of five using React, CSS, and MongoDB to match the arcade theme.
                    I also provided user support for 1,000+ registrants, troubleshooting account issues, answering inquiries, and assisting with
                    website dependent events like sign-in and Skule™ Hunt deployment.
                </p>
            </div>
        </div>
    </div>
  ),
};

function Experience() {
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
            <div className="nav-container-inner"
                style={{paddingTop: '8px',
                    backgroundColor: activeDiv === 'div1' ? '#f0f0f07c' : '' }}>
                <h2>Power</h2>
                <h2>Electronics</h2>
                <h2>Research</h2>
            </div>
            <div className="nav-container-inner" style={activeDiv === 'div2'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>IEEE UofT</h2>
            </div>
            <div className="nav-container-inner" style={{
                    backgroundColor: activeDiv === 'div3' ? '#f0f0f07c' : '' }}>
                <h2>F!rosh Week</h2>
                <h2>co-Webmaster</h2>
            </div>

        </div>
      </div>
      <div className="button-container-outer"></div>
        <div className="button-container-outer">
            <div className="button-container-inner">

            <button id="back-button" onClick={() => navigate(-1)}>
                Back
            </button>

            <button onClick={() => handleButtonClick('div1')}>
                Research
                </button>

            <button onClick={() => handleButtonClick('div2')}>
                IEEE
                </button>

                <button onClick={() => handleButtonClick('div3')}>
                Frosh
                </button>
                
            </div>
        </div>
    </>
  )
}

export default Experience