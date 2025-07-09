import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

import surfBlogImg from '../../assets/images/surfvideo.png'
import portfolioImg from '../../assets/images/portfolio.png'
import websiteImg from '../../assets/images/githubfiller.png'

const projects = [
  {
    title: 'Surf Video Blog',
    url: 'https://github.com/Cblake705/Surf-Video-App',
    image: surfBlogImg,
  },
  {
    title: 'React Portfolio',
    url: 'https://github.com/Cblake705/react-portfolio',
    image: portfolioImg,
  },
  {
    title: 'Personal Website',
    url: 'https://github.com/Cblake705/SmartResumeAnalyzer-Generator',
    image: websiteImg,
  },
]

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [gridLoaded, setGridLoaded] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    const timer2 = setTimeout(() => {
      setGridLoaded(true)
    }, 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div
            className={`projects-grid ${
              gridLoaded ? 'projects-grid-loaded' : ''
            }`}
          >
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
