import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/CBLogo4.png'
import LogoSubtitle from '../../assets/images/logo_sub3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/react-portfolio">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Christian" />
    </Link>
    <nav>
      <NavLink end="true" activeclassname="active" to="/react-portfolio">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        activeclassname="active"
        className="about-link"
        to="/react-portfolio/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        activeclassname="active"
        className="contact-link"
        to="/react-portfolio/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        activeclassname="active"
        className="projects-link"
        to="/react-portfolio/projects"
      >
        <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/christian-blake-a98724221/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Cblake705">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UC7LaLbB9dtkWnOMIv1nVX6g"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
