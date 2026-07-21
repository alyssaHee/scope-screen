import {
  useNavigate,
} from 'react-router-dom'
import { useState } from 'react';
import '../styles/pages.css'
import '../styles/index.css'
import logo from '../assets/logo.png';
import bailey from '../assets/content/bailey.png';
import vball from '../assets/content/vball.png';

const tabContent = {
  div1: (
    <div className="content-inner">
      <h1 className="content-title">Outside of school</h1>
      <div className="project-image-container">
        <div className="link-box">
                <p className="content-text" style={{ marginTop: '10px' }} >A collection of my projects and experiments with oscilloscopes.</p>
            </div>
            <div className="link-box" style={{ marginRight: '20px' }}>
                <img className="exp-image" src={vball} alt="Vball" />
            </div>
            
        </div>
    </div>
  ),
  div2: (
    <div className="content-inner" >
      <img className="full-screen-img" src={bailey} alt="Bailey" />
    </div>
  ),
};

function Misc() {
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
            <h2>Outside of school</h2> 
          </div>
          <div className="nav-container-inner"
          style={activeDiv === 'div2'? { backgroundColor: '#f0f0f07c' } : {} }>
            <h2>Bailey</h2> 
          </div>
        </div>
      </div>
      <div className="button-container-outer"></div>
      <div className="button-container-outer">
      <div className="button-container-inner">
      <button id="back-button"onClick={() => navigate(-1)}>
        Back
      </button>

      <button onClick={() => handleButtonClick('div1')}>
          Outside
        </button>

        <button onClick={() => handleButtonClick('div2')}>
          Bailey
        </button>
      </div>
      </div>
    </>
  )
}

export default Misc