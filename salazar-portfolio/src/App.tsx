import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import './App.css';

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
