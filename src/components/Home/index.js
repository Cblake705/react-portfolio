import LogoTitle from '../../assets/images/CLogo2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'r', 'i', 's', 't', 'i', 'a', 'n']
    const jobArray = ['a',' ','w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return(
        <div className ="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={23} />
                </h1>
                <h2>Frontend Developer / JavaScript Developer / React</h2>
                <Link to="/contact" className= 'flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home