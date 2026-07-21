import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Misc from './pages/Misc'

function App() {
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