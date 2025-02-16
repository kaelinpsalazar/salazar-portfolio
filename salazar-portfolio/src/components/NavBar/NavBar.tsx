import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navBar"> 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;