import { BrowserRouter, Routes, Route } from "react-router"
import "./assets/Style/Style.css"
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      {/* <BlurText
        text="Isn't this so cool?!"
        delay={100}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-7xl mb-8 text-white"
      /> */}

      <BrowserRouter>
        <Routes>
         
            
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
