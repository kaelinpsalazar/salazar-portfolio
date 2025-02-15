import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import './App.css';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <ProjectsPage/>
      <AboutMe />
      <Contact/>
    </>
  );
}

export default App;
