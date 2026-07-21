import {
  useNavigate,
} from 'react-router-dom'
import { useState } from 'react';
import '../styles/pages.css'
import '../styles/index.css'
import logo from '../assets/logo.png';
import dab1 from '../assets/content/dab1.png';
import dab2 from '../assets/content/dab2.png';
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
                <p className="content-text" style={{ marginTop: '10px' }} >A collection of my projects and experiments with oscilloscopes.</p>
            </div>
        </div>
    </div>
  ),
  div2: (
    <div className="content-inner">
      <h1 className="content-title">IEEE</h1>
      <div className="project-image-container">
        <div className="link-box">
                <p className="content-text" style={{ marginTop: '10px' }} >A collection of my projects and experiments with oscilloscopes.</p>
            </div>
            <div className="link-box" style={{ marginRight: '20px' }}>
                <img className="exp-image" src={ieee} alt="IEEE" />
            </div>
            
        </div>
    </div>
  ),
  div3: (
    <div className="content-inner">
      <h1 className="content-title">Frosh Website</h1>
      <div className="project-image-container">
            <div className="link-box">
                <img className="exp-image" src={frosh} alt="Frosh" />
            </div>
            <div className="link-box">
                <p className="content-text" style={{ marginTop: '10px' }} >A collection of my projects and experiments with oscilloscopes.</p>
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
                style={activeDiv === 'div1'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>Research</h2>
            </div>
            <div className="nav-container-inner" style={activeDiv === 'div2'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>IEEE</h2>
            </div>
            <div className="nav-container-inner" style={activeDiv === 'div3'? { backgroundColor: '#f0f0f07c' } : {} }>
                <h2>Frosh website</h2>
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