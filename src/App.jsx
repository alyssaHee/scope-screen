import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { useEffect } from 'react';
import { inject } from '@vercel/analytics';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Misc from './pages/Misc'

function App() {
useEffect(() => {
    inject();
  }, []);

  return (
    <BrowserRouter>
      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/misc" element={<Misc />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App