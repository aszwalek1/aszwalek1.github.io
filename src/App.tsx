import Logo from './components/Logo';
import './index.css';
import Navbar from './components/Navbar';
import Projects from './pages/projects.tsx';
import About from './pages/about.tsx';
import CV from './pages/cv.tsx';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='menu-container'>
        <div className='logo'>
        <Logo />
        </div>
        
        <Navbar />
      </div>
      <Routes>
        <Route path="/alicja_Szwalek" element={<Projects/>}/>
        <Route path="/alicja_Szwalek/about" element={<About/>}/>
        <Route path="/alicja_Szwalek/cv" element={<CV/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;