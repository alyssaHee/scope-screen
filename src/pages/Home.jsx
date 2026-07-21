import {
  useNavigate,
} from 'react-router-dom'
import '../styles/pages.css'
import '../styles/index.css'
import logo from '../assets/logo.png'
import resume from '../assets/pdfs/AlyssaHee-resume.pdf'

function Home() {
  const navigate = useNavigate()



  return (
    <>
      <div className="screen-container">
        

        <div className="content-container">
          <div className="title-container">
            <h1>Alyssa Hee</h1>
          </div>
          <div className="about-container">
            <p>
              Hi! I am an Electrical and Computer engineering student at the University of Toronto.
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
            <h2>Resume</h2>
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

          <button onClick={() => { window.open(resume, '_blank'); }}>
            Resume
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