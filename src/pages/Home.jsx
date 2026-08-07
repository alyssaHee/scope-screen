import {
  useNavigate,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/pages.css'
import '../styles/index.css'
import logo from '../assets/logo.png'

const allowedOrigins = new Set([
  window.location.origin,
  'https://alyssahee.vercel.app',
])

function Home() {
  const navigate = useNavigate()
  const [ishideBtn, setHideBtn] = useState(() => {
    const saved = sessionStorage.getItem('isButtonHidden');
    return saved === 'true'; // Converts string 'true' to boolean true
  });

  const handleHide = () => {
      setHideBtn(true)
      sessionStorage.setItem('isButtonHidden', 'true');
  }

  const [isParentMobile, setIsParentMobile] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (!allowedOrigins.has(event.origin)) return;

      if (event.data && event.data.type === 'device-info') {
        setIsParentMobile(event.data.isMobile);
      }
    };

    window.addEventListener('message', handleMessage);

    if (window.parent !== window) {
      window.parent.postMessage({ type: 'request-device-info' }, '*');
    }

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <div className="screen-container">
         {!ishideBtn && (<button className={`${isParentMobile ? 'hide' : ishideBtn ? 'hide' : 'click-me-btn'}`} onClick={() => handleHide()}>Click me</button>)}
        <div className="content-container">
          <div className="title-container">
            <h1>Alyssa Hee</h1>
          </div>
          <div className={isParentMobile ? 'contact-links-mobile' : 'hide'}>
            <a className="contact-link" href="https://www.linkedin.com/in/alyssa-hee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="contact-link" href="https://github.com/alyssaHee" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-link" href="mailto:alyssa.hee@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
          <div className="about-container">
            <p>
              Hi! I am an electrical and computer engineering student at the University of Toronto.
              <br /><br />I'm interested in power systems, power electronics, and control theory, particularly their applications in renewable energy integration, energy storage, and autonomous systems.
              <br /><br />Welcome to my portfolio! Use the oscilloscope buttons on the right to navigate &#8594;
            </p>
        </div>
        </div>
        <div className="nav-container">
          <div className="nav-container-inner-logo">
            <img id="logo" src={logo} alt="Logo" />
          </div>
          <div className={"nav-container-inner highlighted-nav"}>
            <h2>About</h2>
          </div>
          <div className="nav-container-inner">
            <h2>Experience</h2>
          </div>
          <div className="nav-container-inner">
            <h2>Projects</h2>
          </div>
          <div className="nav-container-inner">
            <h2>Misc.</h2>
          </div>
        </div>
      </div>
      <div className="button-container-outer">
        <div className="button-container-inner">
          <button id="back-button" onClick={() => navigate('/')}>
            Back
          </button>

          <button onClick={() => navigate('/')}>
            About
          </button>

          <button onClick={() => navigate('/experience')}>
            Experience
          </button>

          <button onClick={() => navigate('/projects')}>
            Projects
          </button>

          <button onClick={() => navigate('/misc')}>
            Misc.
          </button>
        </div>
      </div>
    </>
  )
}

export default Home