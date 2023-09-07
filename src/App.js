import './App.css';
import Layout from './component/Layout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Education from './pages/education/Education';
import Project from './pages/projects/Project';
import Techstack from './pages/techstack/Techstack';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div className="App">
        <Layout />
        <div className='containerp'>
          <About />
          <Techstack />
          <Project />
          <Education />
          <Contact />
        </div>

      </div>
      <div className='footer'>
        <h4 className='text-center'>made with love</h4>
      </div>
      <ScrollToTop smooth style={{ backgroundColor: 'rgb(255, 136, 0)' }} />
    </>
  );
}

export default App;
